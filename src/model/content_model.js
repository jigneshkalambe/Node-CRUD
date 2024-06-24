const mongoose = require("mongoose");
const content_Schema = mongoose.Schema(
    {
        content_Name: {
            type: String,
            trim: true,
        },
        content_Contact: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const content = mongoose.model("Content", content_Schema);

module.exports = content;
