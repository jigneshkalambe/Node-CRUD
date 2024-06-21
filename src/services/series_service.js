const { Series } = require("../model");

const series_service_s = (data) => {
    return Series.create(data);
};

const getSeries = () => {
    return Series.find();
};

module.exports = { series_service_s, getSeries };
