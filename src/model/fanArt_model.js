const mongoose = require("mongoose");
const fanArt_Schema = mongoose.Schema(
    {
        fanArt_Name: {
            type: String,
            trim: true,
        },
        fanArt_Type: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const FanArt = mongoose.model("FanArt", fanArt_Schema);

module.exports = FanArt;
