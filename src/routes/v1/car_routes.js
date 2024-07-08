const express = require("express");
const { car_Controller } = require("../../controller");
const router = express.Router();

router.post("/car_post", car_Controller.post_car);
router.get("/car_get", car_Controller.get_car);
// router.delete("/car_delete/:id", car_Controller.delete_car);
router.delete("/car_delete", car_Controller.delete_car);
// router.put("/car_update/:id", car_Controller.update_car);
router.put("/car_update", car_Controller.update_car);

module.exports = router;
