const { Song } = require("../model");

const song_service_post = (data) => {
    return Song.create(data);
};

const song_service_get = () => {
    return Song.find();
};

const song_service_delete = (id) => {
    return Song.findByIdAndDelete(id);
};

const song_service_update = (id, data) => {
    return Song.findByIdAndUpdate(id, data);
};

module.exports = {
    song_service_post,
    song_service_get,
    song_service_delete,
    song_service_update,
};
