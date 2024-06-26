const { Actor } = require("../model");

const actor_service_post = (data) => {
    return Actor.create(data);
};

const actor_service_get = () => {
    return Actor.find();
};

const actor_service_delete = (id) => {
    return Actor.findByIdAndDelete(id);
};

const actor_service_update = (id, data) => {
    return Actor.findByIdAndUpdate(id, data);
};

module.exports = {
    actor_service_post,
    actor_service_get,
    actor_service_delete,
    actor_service_update,
};
