const { User } = require("../model");

const user_service_post = (data) => {
    return User.create(data);
};

const user_service_get = () => {
    return User.find();
};

const user_service_delete = (id) => {
    return User.findByIdAndDelete(id);
};

const user_service_update = (id, data) => {
    return User.findByIdAndUpdate(id, data);
};

module.exports = {
    user_service_post,
    user_service_get,
    user_service_delete,
    user_service_update,
};
