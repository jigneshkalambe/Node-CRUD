const { series_Service } = require("../services");

const series_controller_c = async (req, res) => {
    try {
        const body = req.body;
        const newSeries = await series_Service.series_service_s(body);

        if (!newSeries) {
            throw new Error("!!Series");
        }

        res.status(200).json({
            success: true,
            data: newSeries,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_series = async (req, res) => {
    try {
        const newSeries = await series_Service.getSeries();
        if (!newSeries) {
            throw new Error("!!Series");
        }
        res.status(200).json({
            success: true,
            data: newSeries,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { series_controller_c, get_series };
