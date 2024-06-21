const express = require("express");

const userRoute = require("./user_routes");
const movieRoute = require("./movie_Routes");
const adminRoute = require("./admin_routes");
const seriesRoute = require("./series_routes");
const musicRoute = require("./music_routes");
const bookRoute = require("./book_routes");
const docRoute = require("./doc_routes");

const router = express();

router.use("/user", userRoute);
router.use("/movies", movieRoute);
router.use("/admin", adminRoute);
router.use("/series", seriesRoute);
router.use("/music", musicRoute);
router.use("/books", bookRoute);
router.use("/doc", docRoute);

module.exports = router;
