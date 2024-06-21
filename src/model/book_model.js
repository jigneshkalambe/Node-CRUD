const mongoose = require("mongoose");

const book_Schema = mongoose.Schema(
    {
        book_Name: {
            type: String,
            trim: true,
        },
        book_Price: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const book_model = mongoose.model("Book", book_Schema);

module.exports = book_model;
