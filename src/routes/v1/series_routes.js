const express = require("express");
const { series_Controller } = require("../../controller");
const router = express.Router();

router.post("/series_end", series_Controller.series_controller_c);
router.get("/get_series", series_Controller.get_series);

module.exports = router;
