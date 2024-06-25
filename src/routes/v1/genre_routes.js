const express = require("express");
const { genre_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Genre", genre_Controller.create_Genre);
router.get("/get_Genre", genre_Controller.get_Genre);
router.delete("/delete_Genre", genre_Controller.delete_Genre);
router.put("/update_Genre", genre_Controller.update_Genre);

module.exports = router;
