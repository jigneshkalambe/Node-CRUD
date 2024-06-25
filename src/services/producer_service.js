const { Producer } = require("../model");

const producer_service_post = (data) => {
    return Producer.create(data);
};

const producer_service_get = () => {
    return Producer.find();
};

const producer_delete = (id) => {
    return Producer.findByIdAndDelete(id);
};

const producer_update = (id, data) => {
    return Producer.findByIdAndUpdate(id, data);
};

module.exports = {
    producer_service_post,
    producer_delete,
    producer_service_get,
    producer_update,
};
