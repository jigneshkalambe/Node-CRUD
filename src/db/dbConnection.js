const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://jigneshkalambe63:tfvFPaRZWnGB7CV0@netflix.qlx9rct.mongodb.net/")
        .then((res) => {
            // setInterval(() => {
            console.log("DB is connected");
            // }, 1000);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
