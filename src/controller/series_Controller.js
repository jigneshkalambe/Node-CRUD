const { series_Service } = require("../services");

const create_Series = async (req, res) => {
    try {
        const data = req.body;
        const newSeries = await series_Service.series_service_post(data);
        if (!newSeries) {
            throw new Error("Series isnt created");
        }
        res.status(200).json({
            success: true,
            message: newSeries,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Series = async (req, res) => {
    try {
        const newSeries = await series_Service.series_service_get();
        if (!newSeries) {
            throw new Error("Series isnt created");
        }
        res.status(200).json({
            success: true,
            message: newSeries,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Series = async (req, res) => {
    try {
        const id = req.body.id;
        const newSeries = await series_Service.series_service_delete(id);

        if (!newSeries) {
            throw new Error("Series isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Series deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Series = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newSeries = await series_Service.series_service_update(id, data);

        if (!newSeries) {
            throw new Error("Series isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Series updated successfully",
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

module.exports = { create_Series, get_Series, delete_Series, update_Series };
