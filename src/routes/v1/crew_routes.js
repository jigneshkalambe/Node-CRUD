const express = require("express");
const { crew_Controller } = require("../../controller");

const router = express.Router();

router.post("/create_Crew", crew_Controller.create_Crew);
router.get("/get_Crew", crew_Controller.get_Crew);
router.delete("/delete_Crew", crew_Controller.delete_Crew);
router.put("/update_Crew", crew_Controller.update_Crew);

module.exports = router;
