const mongoose = require("mongoose");
const genre_Schema = mongoose.Schema(
    {
        genre_Name: {
            type: String,
            trim: true,
        },
        genre_Desc: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Genre = mongoose.model("Genre", genre_Schema);

module.exports = Genre;
