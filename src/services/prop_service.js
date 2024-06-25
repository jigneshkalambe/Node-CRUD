const { Prop } = require("../model");

const prop_service_post = (data) => {
    return Prop.create(data);
};

const prop_service_get = () => {
    return Prop.find();
};

const prop_service_delete = (id) => {
    return Prop.findByIdAndDelete(id);
};

const prop_service_update = (id, data) => {
    return Prop.findByIdAndUpdate(id, data);
};

module.exports = {
    prop_service_post,
    prop_service_get,
    prop_service_delete,
    prop_service_update,
};
