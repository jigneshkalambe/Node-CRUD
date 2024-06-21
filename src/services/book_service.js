const { Book } = require("../model");

const book_service_post = (data) => {
    return Book.create(data);
};

const book_service_get = () => {
    return Book.find();
};

module.exports = {
    book_service_post,
    book_service_get,
};
