const express = require("express");
const { award_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Award", award_Controller.create_Award);
router.get("/get_Award", award_Controller.get_Award);
router.delete("/delete_Award", award_Controller.delete_Award);
router.put("/update_Award", award_Controller.update_Award);

module.exports = router;
