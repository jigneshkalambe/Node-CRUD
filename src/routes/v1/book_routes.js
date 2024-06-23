const express = require("express");
const { book_Controller } = require("../../controller");

const router = express.Router();

router.post("/book_end", book_Controller.create_book_c);
router.get("/book_getend", book_Controller.get_book);
router.delete("/delete_book", book_Controller.delete_book_c);
router.put("/update_book", book_Controller.update_book);

module.exports = router;
