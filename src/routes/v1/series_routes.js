const express = require("express");
const { series_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Series", series_Controller.create_Series);
router.get("/get_Series", series_Controller.get_Series);
router.delete("/delete_Series", series_Controller.delete_Series);
router.put("/update_Series", series_Controller.update_Series);

module.exports = router;
