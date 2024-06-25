const { directors_Service } = require("../services");

const create_Directors = async (req, res) => {
    try {
        const data = req.body;
        const newDirectors = await directors_Service.directors_service_post(data);
        if (!newDirectors) {
            throw new Error("Directors isnt created");
        }
        res.status(200).json({
            success: true,
            message: newDirectors,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Directors = async (req, res) => {
    try {
        const newDirectors = await directors_Service.directors_service_get();
        if (!newDirectors) {
            throw new Error("Directors isnt created");
        }
        res.status(200).json({
            success: true,
            message: newDirectors,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Directors = async (req, res) => {
    try {
        const id = req.body.id;
        const newDirectors = await directors_Service.directors_service_delete(id);

        if (!newDirectors) {
            throw new Error("Directors isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Directors deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Directors = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newDirectors = await directors_Service.directors_service_update(id, data);

        if (!newDirectors) {
            throw new Error("Directors isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Directors updated successfully",
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

module.exports = { create_Directors, get_Directors, delete_Directors, update_Directors };
