const { Music } = require("../model");

const get_music_service = (data) => {
    return Music.create(data);
};

const get_music_service_get = () => {
    return Music.find();
};

const delete_Music = (id) => {
    return Music.findByIdAndDelete(id);
};

const update_Music = (id, data) => {
    return Music.findByIdAndUpdate(id, data);
};

module.exports = {
    get_music_service,
    get_music_service_get,
    delete_Music,
    update_Music,
};
