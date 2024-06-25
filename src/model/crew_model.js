const mongoose = require("mongoose");
const crew_Schema = mongoose.Schema(
    {
        crew_Name: {
            type: String,
            trim: true,
        },
        crew_Type: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Crew = mongoose.model("Crew", crew_Schema);

module.exports = Crew;
