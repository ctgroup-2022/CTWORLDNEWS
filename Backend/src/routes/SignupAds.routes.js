import express from "express";
import {
  createSignupAd,
  getAllSignupAds,
  getSignupAdById,
  updateSignupAd,
  deleteSignupAd
} from "../controllers/SignupAds.controller.js";
import { createUploader, validateId } from "../middlewares/fileUpload.middleware.js";

const router = express.Router();

// Configure uploader for signup ads
const uploadSignupAd = createUploader({ 
  folder: 'ads', 
  allowedTypes: ['image/'], 
  maxSize: 5 * 1024 * 1024, 
  fieldName: 'adsImage' 
});

// Create a new signup ad
router.post("/", uploadSignupAd, createSignupAd);

// Get all signup ads
router.get("/", getAllSignupAds);

// Get a specific signup ad by ID
router.get("/:id", validateId, getSignupAdById);

// Update a signup ad
router.put("/:id", validateId, uploadSignupAd, updateSignupAd);

// Delete a signup ad
router.delete("/:id", validateId, deleteSignupAd);

export default router;