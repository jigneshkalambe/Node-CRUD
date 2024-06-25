const express = require("express");
const { playlist_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Playlist", playlist_Controller.create_Playlist);
router.get("/get_Playlist", playlist_Controller.get_Playlist);
router.delete("/delete_Playlist", playlist_Controller.delete_Playlist);
router.put("/update_Playlist", playlist_Controller.update_Playlist);

module.exports = router;
