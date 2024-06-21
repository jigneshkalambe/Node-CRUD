const express = require("express");
const { book_Controller } = require("../../controller");

const router = express.Router();

router.post("/book_end", book_Controller.create_book_c);
router.get("/book_getend", book_Controller.get_book);

module.exports = router;
