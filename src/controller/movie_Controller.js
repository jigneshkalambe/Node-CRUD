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

const get_Movie = async (req, res) => {
    try {
        const data = req.body;
        const newMovie = await movie_Service.get_Movie(data);
        if (!newMovie) {
            throw new Error("Movie isnt created");
        }
        res.status(200).json({
            success: true,
            message: newMovie,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_movie = async (req, res) => {
    try {
        const id = req.body.id;
        const newMovie = await movie_Service.delete_Movie(id);

        if (!newMovie) {
            throw new Error("Movie isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Movie deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_movie = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newMovie = await movie_Service.update_Movie(id, data);

        if (!newMovie) {
            throw new Error("Movie isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Movie updated successfully",
            id,
            data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { movie_controller, delete_movie, update_movie, get_Movie };
