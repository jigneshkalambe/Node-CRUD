const { Item } = require("../model");

const item_service_post = (data) => {
    return Item.create(data);
};

const item_service_get = () => {
    return Item.find();
};

const item_service_delete = (id) => {
    return Item.findByIdAndDelete(id);
};

const item_service_update = (id, data) => {
    return Item.findByIdAndUpdate(id, data);
};

module.exports = {
    item_service_delete,
    item_service_get,
    item_service_post,
    item_service_update,
};
