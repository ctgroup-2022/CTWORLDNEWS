import mongoose from "mongoose";

const loginAdsSchema = new mongoose.Schema({
    adsImagePath: {
        type: String,
        required: true
    },
    sequence: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Pre-save hook to auto-increment sequence number
loginAdsSchema.pre('save', async function(next) {
    // Only set sequence for new documents
    if (this.isNew) {
        try {
            // Find the highest sequence number in the collection
            const maxSequenceDoc = await this.constructor.findOne({}, { sequence: 1 })
                .sort({ sequence: -1 })
                .limit(1);
                
            // Set new sequence value (highest + 1) or 1 if no docs exist
            this.sequence = maxSequenceDoc ? maxSequenceDoc.sequence + 1 : 1;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

// Add index on createdAt for better performance on sorting
loginAdsSchema.index({ createdAt: -1 });
// Add index on sequence field for faster lookups
loginAdsSchema.index({ sequence: 1 }, { unique: true });

const LoginAds = mongoose.model("LoginAds", loginAdsSchema);
export default LoginAds;