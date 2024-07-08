const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://jigneshkalambe63:tfvFPaRZWnGB7CV0@netflix.qlx9rct.mongodb.net/")
        .then((res) => {
            console.log("DB is connected");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
