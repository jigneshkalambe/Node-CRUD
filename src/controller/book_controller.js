const { book_Service } = require("../services");

const create_book_c = async (req, res) => {
    try {
        const data = req.body;
        const newBook = await book_Service.book_service_post(data);
        if (!newBook) {
            throw new Error("Didnt get book Data");
        }
        res.status(200).json({
            success: true,
            data: newBook,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_book = async (req, res) => {
    try {
        const newBook = await book_Service.book_service_get();
        if (!newBook) {
            throw new Error("Didnt get book Data");
        }
        res.status(200).json({
            success: true,
            data: newBook,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_book_c = async (req, res) => {
    try {
        const id = req.body.id;
        const newBook = await book_Service.book_delete(id);

        if (!newBook) {
            throw new Error("Book Delete unsuccessfully");
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_book = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newBook = await book_Service.update_Book(id, data);

        if (!newBook) {
            throw new Error("Admin isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Admin updated successfully",
            id,
            data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_book_c,
    get_book,
    delete_book_c,
    update_book,
};
