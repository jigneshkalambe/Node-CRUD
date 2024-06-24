const { Topic } = require("../model");

const topic_service_post = (data) => {
    return Topic.create(data);
};

const topic_service_get = () => {
    return Topic.find();
};

const topic_delete = (id) => {
    return Topic.findByIdAndDelete(id);
};

const topic_update = (id, data) => {
    return Topic.findByIdAndUpdate(id, data);
};

module.exports = {
    topic_service_post,
    topic_service_get,
    topic_delete,
    topic_update,
};
