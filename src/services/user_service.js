const { User } = require("../model");

const get_user_service = (data) => {
    return User.create(data);
};

const get_user_service_get = () => {
    return User.find();
};

module.exports = { get_user_service, get_user_service_get };
