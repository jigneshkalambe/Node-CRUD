const mongoose = require("mongoose");

const music_Schema = mongoose.Schema(
    {
        music_Name: {
            type: String,
            trim: true,
        },
        music_Artist: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const music = mongoose.model("Music", music_Schema);
module.exports = music;
