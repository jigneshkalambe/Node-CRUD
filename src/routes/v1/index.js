const express = require("express");
const router = express();

const userRoute = require("./user_routes");
const movieRoute = require("./movie_Routes");
const adminRoute = require("./admin_routes");
const seriesRoute = require("./series_routes");
const musicRoute = require("./music_routes");
const bookRoute = require("./book_routes");
const docRoute = require("./doc_routes");
const conRoute = require("./content_routes");
const topicRoute = require("./topic_routes");
const prodRoute = require("./producer_routes");
const itemRoute = require("./item_routes");
const songRoute = require("./song_routes");
const vanRoute = require("./van_routes");
const directorsRoute = require("./directors_routes");
const actorRoutes = require("./actor_routes");
const genreRoutes = require("./genre_routes");

router.use("/user", userRoute);
router.use("/movies", movieRoute);
router.use("/admin", adminRoute);
router.use("/series", seriesRoute);
router.use("/music", musicRoute);
router.use("/books", bookRoute);
router.use("/doc", docRoute);
router.use("/content", conRoute);
router.use("/topic", topicRoute);
router.use("/producer", prodRoute);
router.use("/item", itemRoute);
router.use("/song", songRoute);
router.use("/van", vanRoute);
router.use("/directors", directorsRoute);
router.use("/actor", actorRoutes);
router.use("/genre", genreRoutes);

module.exports = router;
