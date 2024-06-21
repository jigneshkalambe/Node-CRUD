const mongoose = require("mongoose");

const movie_Schema = mongoose.Schema(
    {
        movie_Name: {
            type: String,
            trim: true,
        },
        movie_Rating: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const movie = mongoose.model("Movie", movie_Schema);

module.exports = movie;
