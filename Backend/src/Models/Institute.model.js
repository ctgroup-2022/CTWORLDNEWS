import mongoose from "mongoose";

const InstituteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Institute name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        index: true
    },
    featuredImage: {
        type: String,
        required: [true, 'Featured image is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        minlength: [10, 'Description must be at least 10 characters']
    },
    news: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'News'
    }],
    headlines: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Headlines'
    }],
    isActive: {
        type: Boolean,
        default: true
    },

}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});



const Institute = mongoose.model("Institute", InstituteSchema);
export default Institute;