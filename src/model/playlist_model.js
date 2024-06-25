const mongoose = require("mongoose");
const playlist_Schema = mongoose.Schema(
    {
        playlist_Name: {
            type: String,
            trim: true,
        },
        playlist_Type: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Playlist = mongoose.model("Playlist", playlist_Schema);

module.exports = Playlist;
