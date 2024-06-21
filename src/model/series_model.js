const mongoose = require("mongoose");

const series_Schema = mongoose.Schema(
    {
        series_Name: {
            type: String,
            trim: true,
        },
        series_Number: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const series = mongoose.model("Series", series_Schema);
module.exports = series;
