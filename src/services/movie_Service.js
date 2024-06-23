const { Movie } = require("../model");

const movie_services = (data) => {
    return Movie.create(data);
};

const get_Movie = () => {
    return Movie.find();
};

const delete_Movie = (id) => {
    return Movie.findByIdAndDelete(id);
};

const update_Movie = (id, data) => {
    return Movie.findByIdAndUpdate(id, data);
};

module.exports = { movie_services, get_Movie, delete_Movie, update_Movie };
