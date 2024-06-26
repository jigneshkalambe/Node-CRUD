const { Award } = require("../model");

const award_service_post = (data) => {
    return Award.create(data);
};

const award_service_get = () => {
    return Award.find();
};

const award_service_delete = (id) => {
    return Award.findByIdAndDelete(id);
};

const award_service_update = (id, data) => {
    return Award.findByIdAndUpdate(id, data);
};

module.exports = {
    award_service_post,
    award_service_get,
    award_service_delete,
    award_service_update,
};
