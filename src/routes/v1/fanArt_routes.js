const express = require("express");
const { fanArt_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_FanArt", fanArt_Controller.create_FanArt);
router.get("/get_FanArt", fanArt_Controller.get_FanArt);
router.delete("/delete_FanArt", fanArt_Controller.delete_FanArt);
router.put("/update_FanArt", fanArt_Controller.update_FanArt);

module.exports = router;
