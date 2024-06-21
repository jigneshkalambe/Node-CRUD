const express = require("express");
const { movie_Controller } = require("../../controller");

const router = express.Router();

router.post("/movieEnd", movie_Controller.movie_controller);

module.exports = router;
