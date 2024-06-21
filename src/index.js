const express = require("express");
const connectDB = require("./db/dbConnection");
const router = require("./routes/v1");

const app = express();

app.listen(8080, () => {
    // setInterval(() => {
    console.log("Server is running");
    // }, 1000);
});

app.use(express.json());

app.use("/v1", router);

connectDB();
