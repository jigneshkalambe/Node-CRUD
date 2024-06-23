const { Book } = require("../model");

const book_service_post = (data) => {
    return Book.create(data);
};

const book_service_get = () => {
    return Book.find();
};

const book_delete = (id) => {
    return Book.findByIdAndDelete(id);
};

const update_Book = (id, data) => {
    return Book.findByIdAndUpdate(id, data);
};

module.exports = {
    book_service_post,
    book_service_get,
    book_delete,
    update_Book,
};
