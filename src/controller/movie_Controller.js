const { Movie } = require("../model");
const { movie_Service } = require("../services");

const movie_controller = async (req, res) => {
    try {
        const reqBody = req.body;
        const newMovies = await movie_Service.movie_services(reqBody);
        // const newMovies = await Movie.create(reqBody);
        res.status(200).json({
            success: true,
            message: newMovies,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const movie_controller2 = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Route Got Hitted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const movie_Controller3 = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Route Got Hitted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const movie_Controller4 = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Route Got Hitted",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { movie_controller, movie_controller2 };
