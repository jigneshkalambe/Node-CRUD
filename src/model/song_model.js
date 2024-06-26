const mongoose = require("mongoose");
const song_Schema = mongoose.Schema(
    {
        song_Name: {
            type: String,
            trim: true,
        },
        song_Artist: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Song = mongoose.model("Song", song_Schema);

module.exports = Song;
