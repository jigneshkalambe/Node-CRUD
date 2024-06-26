const mongoose = require("mongoose");
const directors_Schema = mongoose.Schema(
    {
        directors_Name: {
            type: String,
            trim: true,
        },
        directors_Contact: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Directors = mongoose.model("Directors", directors_Schema);

module.exports = Directors;
