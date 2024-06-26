const { Crew } = require("../model");

const crew_service_post = (data) => {
    return Crew.create(data);
};

const crew_service_get = () => {
    return Crew.find();
};

const crew_service_delete = (id) => {
    return Crew.findByIdAndDelete(id);
};

const crew_service_update = (id, data) => {
    return Crew.findByIdAndUpdate(id, data);
};

module.exports = {
    crew_service_post,
    crew_service_get,
    crew_service_delete,
    crew_service_update,
};
