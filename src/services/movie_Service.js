const { Movie } = require("../model");

const movie_services = (data) => {
    return Movie.create(data);
};

module.exports = { movie_services };
