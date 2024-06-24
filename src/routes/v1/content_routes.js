const express = require("express");
const { content_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_content", content_Controller.create_Content);
router.get("/getcontent", content_Controller.get_Content);
router.delete("/delete_content", content_Controller.delete_Content);
router.put("/update_content", content_Controller.update_Content);

module.exports = router;
