const express = require("express");
const { review_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Review", review_Controller.create_Review);
router.get("/get_Review", review_Controller.get_Review);
router.delete("/delete_Review", review_Controller.delete_Review);
router.put("/update_Review", review_Controller.update_Review);

module.exports = router;
