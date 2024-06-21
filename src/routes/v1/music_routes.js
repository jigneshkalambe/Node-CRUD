const express = require("express");
const { music_Controller } = require("../../controller");
const router = express.Router();

router.post("/music_end", music_Controller.create_music_c);
router.get("/getmusic", music_Controller.get_music_c);

module.exports = router;
