const mongoose = require("mongoose");
const van_Schema = mongoose.Schema(
    {
        van_Name: {
            type: String,
            trim: true,
        },
        van_Number: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Van = mongoose.model("Van", van_Schema);

module.exports = Van;
