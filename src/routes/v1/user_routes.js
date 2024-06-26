const express = require("express");
const { user_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_User", user_Controller.create_User);
router.get("/get_User", user_Controller.get_User);
router.delete("/delete_User", user_Controller.delete_User);
router.put("/update_User", user_Controller.update_User);

module.exports = router;
