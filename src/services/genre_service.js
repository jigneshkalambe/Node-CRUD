const { Genre } = require("../model");

const genre_service_post = (data) => {
    return Genre.create(data);
};

const genre_service_get = () => {
    return Genre.find();
};

const genre_service_delete = (id) => {
    return Genre.findByIdAndDelete(id);
};

const genre_service_update = (id, data) => {
    return Genre.findByIdAndUpdate(id, data);
};

module.exports = {
    genre_service_post,
    genre_service_get,
    genre_service_delete,
    genre_service_update,
};
