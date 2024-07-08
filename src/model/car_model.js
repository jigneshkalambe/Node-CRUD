const mongoose = require("mongoose");

const car_Schema = mongoose.Schema(
    {
        car_Name: {
            type: String,
            trim: true,
        },
        car_Model: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Car = mongoose.model("Car", car_Schema);

module.exports = Car;
