const express = require("express");
const { item_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Item", item_Controller.create_Item);
router.get("/get_Item", item_Controller.get_Item);
router.delete("/delete_Item", item_Controller.delete_Item);
router.put("/update_Item", item_Controller.update_Item);

module.exports = router;
