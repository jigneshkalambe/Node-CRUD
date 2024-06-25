const { Script } = require("../model");

const script_service_post = (data) => {
    return Script.create(data);
};

const script_service_get = () => {
    return Script.find();
};

const script_service_delete = (id) => {
    return Script.findByIdAndDelete(id);
};

const script_service_update = (id, data) => {
    return Script.findByIdAndUpdate(id, data);
};

module.exports = {
    script_service_post,
    script_service_get,
    script_service_delete,
    script_service_update,
};
