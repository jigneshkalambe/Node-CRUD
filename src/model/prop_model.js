const mongoose = require("mongoose");
const prop_Schema = mongoose.Schema(
    {
        prop_Name: {
            type: String,
            trim: true,
        },
        prop_Type: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Prop = mongoose.model("Prop", prop_Schema);

module.exports = Prop;
