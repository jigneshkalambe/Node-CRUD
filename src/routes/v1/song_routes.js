const express = require("express");
const { song_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Song", song_Controller.create_Song);
router.get("/get_Song", song_Controller.get_Song);
router.delete("/delete_Song", song_Controller.delete_Song);
router.put("/update_Song", song_Controller.update_Song);

module.exports = router;
