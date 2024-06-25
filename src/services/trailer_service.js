const { Trailer } = require("../model");

const trailer_service_post = (data) => {
    return Trailer.create(data);
};

const trailer_service_get = () => {
    return Trailer.find();
};

const trailer_service_delete = (id) => {
    return Trailer.findByIdAndDelete(id);
};

const trailer_service_update = (id, data) => {
    return Trailer.findByIdAndUpdate(id, data);
};

module.exports = {
    trailer_service_post,
    trailer_service_get,
    trailer_service_delete,
    trailer_service_update,
};
