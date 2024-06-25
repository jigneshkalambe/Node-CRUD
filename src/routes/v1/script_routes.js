const express = require("express");
const { script_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Script", script_Controller.create_Script);
router.get("/get_Script", script_Controller.get_Script);
router.delete("/delete_Script", script_Controller.delete_Script);
router.put("/update_Script", script_Controller.update_Script);

module.exports = router;
