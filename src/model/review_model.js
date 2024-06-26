const mongoose = require("mongoose");
const review_Schema = mongoose.Schema(
    {
        review_About: {
            type: String,
            trim: true,
        },
        total_Review: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model("Review", review_Schema);

module.exports = Review;
