const express = require("express");
const { van_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Van", van_Controller.create_Van);
router.get("/get_Van", van_Controller.get_Van);
router.delete("/delete_Van", van_Controller.delete_Van);
router.put("/update_Van", van_Controller.update_Van);

module.exports = router;
