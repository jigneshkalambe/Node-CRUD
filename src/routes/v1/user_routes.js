const express = require("express");
const { user_Controller } = require("../../controller");
const router = express.Router();
router.get(
    "/end_point",
    //      (req, res) => {
    //     res.status(200).json({
    //         success: true,
    //         message: "ROUTE GOT HITTED",
    //     });
    // }
    user_Controller.get_user_c
);

router.post("/user_end", user_Controller.create_user_c);

module.exports = router;
