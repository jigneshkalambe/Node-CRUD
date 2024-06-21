const mongoose = require("mongoose");

const user_Schema = mongoose.Schema(
    {
        // keys define
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
    },
    {
        // unique || fn key define
        timestamps: true,
    }
);

const user = mongoose.model("User", user_Schema);

module.exports = user;
