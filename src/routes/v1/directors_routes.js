const express = require("express");
const { directors_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Directors", directors_Controller.create_Directors);
router.get("/get_Directors", directors_Controller.get_Directors);
router.delete("/delete_Directors", directors_Controller.delete_Directors);
router.put("/update_Directors", directors_Controller.update_Directors);

module.exports = router;
