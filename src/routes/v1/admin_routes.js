const express = require("express");
const { admin_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_admin", admin_Controller.create_admin);
router.get("/getAdmin", admin_Controller.get_Admin);
router.delete("/delete_admin", admin_Controller.delete_admin);
router.put("/update_admin", admin_Controller.update_admin);
// router.delete("/delete_admin", admin_Controller.delete_Admin);
// router.put("/update_admin/:admin_id", admin_Controller.update_Admin);

module.exports = router;
