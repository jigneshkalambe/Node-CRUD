const { song_Service } = require("../services");

const create_Song = async (req, res) => {
    try {
        const data = req.body;
        const newSong = await song_Service.song_service_post(data);
        if (!newSong) {
            throw new Error("Song isnt created");
        }
        res.status(200).json({
            success: true,
            data: newSong,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Song = async (req, res) => {
    try {
        const newSong = await song_Service.song_service_get();
        if (!newSong) {
            throw new Error("Song isnt created");
        }
        res.status(200).json({
            success: true,
            data: newSong,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Song = async (req, res) => {
    try {
        const id = req.body.id;
        const newSong = await song_Service.song_service_delete(id);

        if (!newSong) {
            throw new Error("Song isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Song deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Song = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newSong = await song_Service.song_service_update(id, data);

        if (!newSong) {
            throw new Error("Song isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Song updated successfully",
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

module.exports = { create_Song, get_Song, delete_Song, update_Song };
