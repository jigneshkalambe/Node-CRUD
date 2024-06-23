const express = require("express");
const { music_Controller } = require("../../controller");
const router = express.Router();

router.post("/music_end", music_Controller.create_music_c);
router.get("/getmusic", music_Controller.get_music_c);
router.delete("/delete_music", music_Controller.delete_music);
router.put("/update_music", music_Controller.update_music);
module.exports = router;
