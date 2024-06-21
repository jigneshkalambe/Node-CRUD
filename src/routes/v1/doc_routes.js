const express = require("express");
const { doc_Controller } = require("../../controller");

const router = express.Router();

router.post("/doc_end", doc_Controller.create_doc_c);
router.get("/get_doc", doc_Controller.get_doc_data);
router.delete("/delete_doc", doc_Controller.delete_doc);
// router.delete("/delete_doc/:id", doc_Controller.delete_doc);

module.exports = router;
