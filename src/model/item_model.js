const mongoose = require("mongoose");

const item_Schema = mongoose.Schema(
    {
        item_Name: {
            type: String,
            trim: true,
        },
        item_Price: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.model("Item", item_Schema);
module.exports = Item;
