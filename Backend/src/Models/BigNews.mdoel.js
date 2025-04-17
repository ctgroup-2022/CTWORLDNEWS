import mongoose from "mongoose";

const BigNewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],

    maxlength: [100, "Title cannot exceed 100 characters"],
    minlength: [5, "Title must be at least 5 characters long"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [20, "Description should be at least 20 characters long"],
    maxlength: [5000, "Description cannot exceed 5000 characters"]
  },
  featuredImage: {
    type: String,
    required: [true, "Featured image URL is required"],
  },
  date: {
    type: Date,
    default: Date.now,
    index: true, // Index for date-based queries
   
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true // Index for filtering active content
  },
  category: {
    default: "General",
    type: String,
    required: [true, "Category is required"],
    index: true // Index for category filtering
  },

}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});



const BigNews = mongoose.model("BigNews", BigNewsSchema);
export default BigNews;