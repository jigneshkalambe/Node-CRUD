const mongoose = require("mongoose");
const device_Schema = mongoose.Schema(
    {
        device_Name: {
            type: String,
            trim: true,
        },
        device_Type: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Device = mongoose.model("Device", device_Schema);

module.exports = Device;
