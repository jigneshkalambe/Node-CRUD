const express = require("express");
const { actor_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Actor", actor_Controller.create_Actor);
router.get("/get_Actor", actor_Controller.get_Actor);
router.delete("/delete_Actor", actor_Controller.delete_Actor);
router.put("/update_Actor", actor_Controller.update_Actor);

module.exports = router;
