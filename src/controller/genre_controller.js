const { genre_Service } = require("../services");

const create_Genre = async (req, res) => {
    try {
        const data = req.body;
        const newGenre = await genre_Service.genre_service_post(data);
        if (!newGenre) {
            throw new Error("Genre isnt created");
        }
        res.status(200).json({
            success: true,
            message: newGenre,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Genre = async (req, res) => {
    try {
        const newGenre = await genre_Service.genre_service_get();
        if (!newGenre) {
            throw new Error("Genre isnt created");
        }
        res.status(200).json({
            success: true,
            message: newGenre,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Genre = async (req, res) => {
    try {
        const id = req.body.id;
        const newGenre = await genre_Service.genre_service_delete(id);

        if (!newGenre) {
            throw new Error("Genre isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Genre deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Genre = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newGenre = await genre_Service.genre_service_update(id, data);

        if (!newGenre) {
            throw new Error("Genre isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Genre updated successfully",
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

module.exports = { create_Genre, get_Genre, delete_Genre, update_Genre };
