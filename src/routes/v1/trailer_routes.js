const express = require("express");
const { trailer_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Trailer", trailer_Controller.create_Trailer);
router.get("/get_Trailer", trailer_Controller.get_Trailer);
router.delete("/delete_Trailer", trailer_Controller.delete_Trailer);
router.put("/update_Trailer", trailer_Controller.update_Trailer);

module.exports = router;
