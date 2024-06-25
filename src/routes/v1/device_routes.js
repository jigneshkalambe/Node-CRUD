const express = require("express");
const { device_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Device", device_Controller.create_Device);
router.get("/get_Device", device_Controller.get_Device);
router.delete("/delete_Device", device_Controller.delete_Device);
router.put("/update_Device", device_Controller.update_Device);

module.exports = router;
