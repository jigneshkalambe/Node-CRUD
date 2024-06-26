const { Playlist } = require("../model");

const playlist_service_post = (data) => {
    return Playlist.create(data);
};

const playlist_service_get = () => {
    return playlist.find();
};

const playlist_service_delete = (id) => {
    return playlist.findByIdAndDelete(id);
};

const playlist_service_update = (id, data) => {
    return playlist.findByIdAndUpdate(id, data);
};

module.exports = {
    playlist_service_post,
    playlist_service_get,
    playlist_service_delete,
    playlist_service_update,
};
