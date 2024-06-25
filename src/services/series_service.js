const { Series } = require("../model");

const series_service_post = (data) => {
    return Series.create(data);
};

const series_service_get = () => {
    return Series.find();
};

const series_service_delete = (id) => {
    return Series.findByIdAndDelete(id);
};

const series_service_update = (id, data) => {
    return Series.findByIdAndUpdate(id, data);
};

module.exports = {
    series_service_post,
    series_service_get,
    series_service_delete,
    series_service_update,
};
