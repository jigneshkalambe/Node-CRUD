const { Admin } = require("../model");

const create_admin_S = (data) => {
    return Admin.create(data);
};

const get_admin = () => {
    return Admin.find();
};

const delete_Admin = (id) => {
    return Admin.findByIdAndDelete(id);
};

const update_Admin = (id, data) => {
    return Admin.findByIdAndUpdate(id, data);
};

module.exports = { create_admin_S, get_admin, delete_Admin, update_Admin };
