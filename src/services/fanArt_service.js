const { FanArt } = require("../model");

const fanArt_service_post = (data) => {
    return FanArt.create(data);
};

const fanArt_service_get = () => {
    return FanArt.find();
};

const fanArt_service_delete = (id) => {
    return FanArt.findByIdAndDelete(id);
};

const fanArt_service_update = (id, data) => {
    return FanArt.findByIdAndUpdate(id, data);
};

module.exports = {
    fanArt_service_post,
    fanArt_service_get,
    fanArt_service_delete,
    fanArt_service_update,
};
