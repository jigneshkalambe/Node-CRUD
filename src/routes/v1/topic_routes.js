const express = require("express");
const { topic_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Topic", topic_Controller.create_Topic);
router.get("/get_Topic", topic_Controller.get_Topic);
router.delete("/delete_Topic", topic_Controller.delete_Topic);
router.put("/update_Topic", topic_Controller.update_Topic);

module.exports = router;
