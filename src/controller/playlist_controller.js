const { playlist_Service } = require("../services");

const create_Playlist = async (req, res) => {
    try {
        const data = req.body;
        const newPlaylist = await playlist_Service.playlist_service_post(data);
        if (!newPlaylist) {
            throw new Error("Playlist isnt created");
        }
        res.status(200).json({
            success: true,
            message: newPlaylist,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Playlist = async (req, res) => {
    try {
        const newPlaylist = await playlist_Service.playlist_service_get();
        if (!newPlaylist) {
            throw new Error("Playlist isnt created");
        }
        res.status(200).json({
            success: true,
            message: newPlaylist,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Playlist = async (req, res) => {
    try {
        const id = req.body.id;
        const newPlaylist = await playlist_Service.playlist_service_delete(id);

        if (!newPlaylist) {
            throw new Error("Playlist isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Playlist deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Playlist = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newPlaylist = await playlist_Service.playlist_service_update(id, data);

        if (!newPlaylist) {
            throw new Error("Playlist isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Playlist updated successfully",
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

module.exports = { create_Playlist, get_Playlist, delete_Playlist, update_Playlist };
