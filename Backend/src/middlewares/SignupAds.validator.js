// filepath: d:\CEETEEWORLDNEWS-V2.0\Backend\src\middlewares\SignupAds.validator.js
import { body, validationResult } from 'express-validator';

export const validateSignupAdCreate = [
  body('adsImage').custom((value, { req }) => {
    if (!req.file) {
      throw new Error('Ad image is required');
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];