const express = require("express");
const { prop_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Prop", prop_Controller.create_Prop);
router.get("/get_Prop", prop_Controller.get_Prop);
router.delete("/delete_Prop", prop_Controller.delete_Prop);
router.put("/update_Prop", prop_Controller.update_Prop);

module.exports = router;
