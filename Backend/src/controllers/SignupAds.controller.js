import SignupAds from "../Models/SignupAds.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new signup ad
export const createSignupAd = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Ad image is required" });
    }

    const newAd = new SignupAds({
      adsImagePath: req.file.relativePath,
    });

    const savedAd = await newAd.save();
    res.status(201).json({ 
      success: true,
      message: "Signup ad created successfully",
      data: savedAd
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Failed to create signup ad",
      error: error.message 
    });
  }
};

// Get all signup ads
export const getAllSignupAds = async (req, res) => {
  try {
    const ads = await SignupAds.find().sort({ sequence: 1 });
    res.status(200).json({ 
      success: true,
      count: ads.length,
      data: ads 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch signup ads",
      error: error.message 
    });
  }
};

// Get a specific signup ad by ID
export const getSignupAdById = async (req, res) => {
  try {
    const ad = await SignupAds.findById(req.params.id);
    if (!ad) {
      return res.status(404).json({ 
        success: false,
        message: "Signup ad not found" 
      });
    }
    res.status(200).json({ 
      success: true,
      data: ad 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch signup ad",
      error: error.message 
    });
  }
};

// Update a signup ad
export const updateSignupAd = async (req, res) => {
  try {
    const ad = await SignupAds.findById(req.params.id);
    if (!ad) {
      return res.status(404).json({ 
        success: false, 
        message: "Signup ad not found" 
      });
    }

    // If there's a new file, update the image path and delete old file
    if (req.file) {
      // Delete old image if it exists
      if (ad.adsImagePath) {
        const oldFilePath = path.join(__dirname, '../../', ad.adsImagePath);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }
      ad.adsImagePath = req.file.relativePath;
    }

    const updatedAd = await ad.save();
    
    res.status(200).json({ 
      success: true,
      message: "Signup ad updated successfully",
      data: updatedAd 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Failed to update signup ad",
      error: error.message 
    });
  }
};

// Delete a signup ad
export const deleteSignupAd = async (req, res) => {
  try {
    const ad = await SignupAds.findById(req.params.id);
    if (!ad) {
      return res.status(404).json({ 
        success: false, 
        message: "Signup ad not found" 
      });
    }

    // Delete the image file if it exists
    if (ad.adsImagePath) {
      const filePath = path.join(__dirname, '../../', ad.adsImagePath);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await SignupAds.findByIdAndDelete(req.params.id);
    
    res.status(200).json({ 
      success: true,
      message: "Signup ad deleted successfully" 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Failed to delete signup ad",
      error: error.message 
    });
  }
};