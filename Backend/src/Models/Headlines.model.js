import mongoose from "mongoose";

const HeadlinesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  
  },
  isActive: {
    type: Boolean,
    default: true
  },
  institute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Institute',
    required: true
  }
}, { timestamps: true }); // This automatically adds createdAt and updatedAt fields

const Headlines = mongoose.model("Headlines", HeadlinesSchema);
export default Headlines;