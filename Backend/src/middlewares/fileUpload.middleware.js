import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Configure multer storage for different types of uploads
 * @param {string} folder - Subfolder in uploads directory (e.g., 'ads', 'news', 'profiles')
 * @returns {Object} Configured multer storage
 */
const configureStorage = (folder) => {
  // Ensure the upload directory exists
  const uploadPath = path.join(__dirname, `../../uploads/${folder}`);
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, uniqueFileName);
    }
  });
};

/**
 * Create file filter based on allowed mime types
 * @param {Array} allowedTypes - Array of allowed mime type prefixes (e.g., ['image/', 'video/'])
 * @returns {Function} Multer file filter function
 */
const createFileFilter = (allowedTypes) => {
  return (req, file, cb) => {
    const isAllowed = allowedTypes.some(type => file.mimetype.startsWith(type));
    if (isAllowed) {
      cb(null, true);
    } else {
      cb(new Error(`Only ${allowedTypes.join(', ')} files are allowed`), false);
    }
  };
};

/**
 * Create an uploader for a specific resource type
 * @param {Object} options - Configuration options
 * @param {string} options.folder - Subfolder name in uploads directory
 * @param {Array} options.allowedTypes - Allowed file mime type prefixes
 * @param {number} options.maxSize - Maximum file size in bytes
 * @param {string} options.fieldName - Form field name for the file
 * @returns {Function} Express middleware for handling file uploads
 */
export const createUploader = ({ 
  folder, 
  allowedTypes = ['image/'], 
  maxSize = 5 * 1024 * 1024, 
  fieldName = 'file' 
}) => {
  const storage = configureStorage(folder);
  const upload = multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter: createFileFilter(allowedTypes)
  }).single(fieldName);

  // Return middleware that handles multer errors
  return (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            success: false,
            message: `File size exceeds ${maxSize / (1024 * 1024)}MB limit`
          });
        }
        return res.status(400).json({
          success: false,
          message: err.message
        });
      } else if (err) {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      
      // Add file path relative to the project root for consistency
      if (req.file) {
        // Convert absolute path to relative path from project root
        const relativePath = path.relative(
          path.join(__dirname, '../..'),
          req.file.path
        ).replace(/\\/g, '/'); // Replace backslashes with forward slashes
        
        req.file.relativePath = relativePath;
      }
      
      next();
    });
  };
};

/**
 * Validate MongoDB ID
 */
export const validateId = (req, res, next) => {
  const id = req.params.id;
  
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format"
    });
  }
  
  next();
};