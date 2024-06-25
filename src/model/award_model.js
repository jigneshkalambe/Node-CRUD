const mongoose = require("mongoose");
const award_Schema = mongoose.Schema(
    {
        award_Name: {
            type: String,
            trim: true,
        },
        award_Artist: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Award = mongoose.model("Award", award_Schema);

module.exports = Award;
