const { Content } = require("../model");

const content_service_post = (data) => {
    return Content.create(data);
};

const content_service_get = () => {
    return Content.find();
};

const content_delete = (id) => {
    return Content.findByIdAndDelete(id);
};

const content_update = (id, data) => {
    return Content.findByIdAndUpdate(id, data);
};

module.exports = {
    content_service_post,
    content_service_get,
    content_delete,
    content_update,
};
