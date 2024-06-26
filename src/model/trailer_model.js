const mongoose = require("mongoose");
const trailer_Schema = mongoose.Schema(
    {
        trailer_Name: {
            type: String,
            trim: true,
        },
        trailer_Lead: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Trailer = mongoose.model("Trailer", trailer_Schema);

module.exports = Trailer;
