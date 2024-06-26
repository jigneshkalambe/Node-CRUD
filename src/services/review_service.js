const { Review } = require("../model");

const review_service_post = (data) => {
    return Review.create(data);
};

const review_service_get = () => {
    return Review.find();
};

const review_service_delete = (id) => {
    return Review.findByIdAndDelete(id);
};

const review_service_update = (id, data) => {
    return Review.findByIdAndUpdate(id, data);
};

module.exports = {
    review_service_post,
    review_service_get,
    review_service_delete,
    review_service_update,
};
