const mongoose = require("mongoose");
const producer_Schema = mongoose.Schema(
    {
        producer_Name: {
            type: String,
            trim: true,
        },
        producer_Contact: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Producer = mongoose.model("Producer", producer_Schema);

module.exports = Producer;
