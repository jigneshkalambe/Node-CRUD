const { Van } = require("../model");

const van_service_post = (data) => {
    return Van.create(data);
};

const van_service_get = () => {
    return Van.find();
};

const van_service_delete = (id) => {
    return Van.findByIdAndDelete(id);
};

const van_service_update = (id, data) => {
    return Van.findByIdAndUpdate(id, data);
};

module.exports = {
    van_service_post,
    van_service_get,
    van_service_delete,
    van_service_update,
};
