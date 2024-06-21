const express = require("express");
const { admin_Controller } = require("../../controller");
const { get_Admin } = require("../../controller/admin_Controller");

const router = express.Router();

router.post("/create_admin", admin_Controller.create_admin);

router.get("/getAdmin", admin_Controller.get_Admin);

module.exports = router;
