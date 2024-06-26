const { trailer_Service } = require("../services");

const create_Trailer = async (req, res) => {
    try {
        const data = req.body;
        const newTrailer = await trailer_Service.trailer_service_post(data);
        if (!newTrailer) {
            throw new Error("Trailer isnt created");
        }
        res.status(200).json({
            success: true,
            data: newTrailer,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Trailer = async (req, res) => {
    try {
        const newTrailer = await trailer_Service.trailer_service_get();
        if (!newTrailer) {
            throw new Error("Trailer isnt created");
        }
        res.status(200).json({
            success: true,
            data: newTrailer,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Trailer = async (req, res) => {
    try {
        const id = req.body.id;
        const newTrailer = await trailer_Service.trailer_service_delete(id);

        if (!newTrailer) {
            throw new Error("Trailer isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Trailer deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Trailer = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newTrailer = await trailer_Service.trailer_service_update(id, data);

        if (!newTrailer) {
            throw new Error("Trailer isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Trailer updated successfully",
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

module.exports = { create_Trailer, get_Trailer, delete_Trailer, update_Trailer };
