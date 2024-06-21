const { Music } = require("../model");

const get_music_service = (data) => {
    return Music.create(data);
};

const get_music_service_get = () => {
    return Music.find();
};

module.exports = {
    get_music_service,
    get_music_service_get,
};
