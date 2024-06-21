const mongoose = require("mongoose");

const doc_Schema = mongoose.Schema(
    {
        doc_Name: {
            type: String,
            trim: true,
        },
        doc_Number: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const doc_modal = mongoose.model("Documentry", doc_Schema);

module.exports = doc_modal;
