const mongoose = require("mongoose");
const script_Schema = mongoose.Schema(
    {
        script_Name: {
            type: String,
            trim: true,
        },
        script_Type: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Script = mongoose.model("Script", script_Schema);

module.exports = Script;
