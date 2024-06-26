const { Device } = require("../model");

const device_service_post = (data) => {
    return Device.create(data);
};

const device_service_get = () => {
    return Device.find();
};

const device_service_delete = (id) => {
    return Device.findByIdAndDelete(id);
};

const device_service_update = (id, data) => {
    return Device.findByIdAndUpdate(id, data);
};

module.exports = {
    device_service_post,
    device_service_get,
    device_service_delete,
    device_service_update,
};
