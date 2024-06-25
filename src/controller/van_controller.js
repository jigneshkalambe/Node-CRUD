const { van_Service } = require("../services");

const create_Van = async (req, res) => {
    try {
        const data = req.body;
        const newVan = await van_Service.van_service_post(data);
        if (!newVan) {
            throw new Error("Song isnt created");
        }
        res.status(200).json({
            success: true,
            message: newVan,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Van = async (req, res) => {
    try {
        const newVan = await van_Service.van_service_get();
        if (!newVan) {
            throw new Error("Song isnt created");
        }
        res.status(200).json({
            success: true,
            message: newVan,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Van = async (req, res) => {
    try {
        const id = req.body.id;
        const newVan = await van_Service.van_service_delete(id);

        if (!newVan) {
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

const update_Van = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newVan = await van_Service.van_service_update(id, data);

        if (!newVan) {
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

module.exports = { create_Van, get_Van, delete_Van, update_Van };
