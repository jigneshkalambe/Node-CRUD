const express = require("express");
const connectDB = require("./db/dbConnection");
const router = require("./routes/v1");

const app = express();

app.listen(8080, () => {
    console.log("Server is running");
});

app.use(express.json());

app.use("/v1", router);

connectDB();
