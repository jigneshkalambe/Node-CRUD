const { Directors } = require("../model");

const directors_service_post = (data) => {
    return Directors.create(data);
};

const directors_service_get = () => {
    return Directors.find();
};

const directors_service_delete = (id) => {
    return Directors.findByIdAndDelete(id);
};

const directors_service_update = (id, data) => {
    return Directors.findByIdAndUpdate(id, data);
};

module.exports = {
    directors_service_post,
    directors_service_get,
    directors_service_delete,
    directors_service_update,
};
