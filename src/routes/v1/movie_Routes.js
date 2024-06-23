const express = require("express");
const { movie_Controller } = require("../../controller");

const router = express.Router();

router.post("/movieEnd", movie_Controller.movie_controller);
router.get("/movieGet", movie_Controller.get_Movie);
router.delete("/delete_movie", movie_Controller.delete_movie);
router.put("/update_movie", movie_Controller.update_movie);
module.exports = router;
