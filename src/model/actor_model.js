const mongoose = require("mongoose");
const actor_Schema = mongoose.Schema(
    {
        actor_Name: {
            type: String,
            trim: true,
        },
        actor_Contact: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Actor = mongoose.model("Actor", actor_Schema);

module.exports = Actor;
