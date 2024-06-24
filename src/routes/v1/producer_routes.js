const express = require("express");
const { producer_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Producer", producer_Controller.create_Producer);
router.get("/get_Producer", producer_Controller.get_Producer);
router.delete("/delete_Producer", producer_Controller.delete_Producer);
router.put("/update_Producer", producer_Controller.update_Producer);

module.exports = router;
