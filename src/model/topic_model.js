const mongoose = require("mongoose");
const topic_Schema = mongoose.Schema(
    {
        topic_Name: {
            type: String,
            trim: true,
        },
        topic_Desc: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.model("Topic", topic_Schema);

module.exports = Topic;
