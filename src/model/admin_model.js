const mongoose = require("mongoose");
const admin_Schema = mongoose.Schema(
    {
        admin_Name: {
            type: String,
            trim: true,
        },
        admin_Contact: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const admin = mongoose.model("Admin", admin_Schema);

module.exports = admin;
