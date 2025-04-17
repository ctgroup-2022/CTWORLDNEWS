import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    featuredImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pdfPath: {
        type: String,
        default: null
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: [{
        type: String,
        required: true
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    institute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },

}, { timestamps: true });



const News = mongoose.model("News", NewsSchema);
export default News;