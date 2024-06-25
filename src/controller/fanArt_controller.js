const { fanArt_Service } = require("../services");

const create_FanArt = async (req, res) => {
    try {
        const data = req.body;
        const newFanArt = await fanArt_Service.fanArt_service_post(data);
        if (!newFanArt) {
            throw new Error("FanArt isnt created");
        }
        res.status(200).json({
            success: true,
            data: newFanArt,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_FanArt = async (req, res) => {
    try {
        const newFanArt = await fanArt_Service.fanArt_service_get();
        if (!newFanArt) {
            throw new Error("FanArt isnt created");
        }
        res.status(200).json({
            success: true,
            data: newFanArt,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_FanArt = async (req, res) => {
    try {
        const id = req.body.id;
        const newFanArt = await fanArt_Service.fanArt_service_delete(id);

        if (!newFanArt) {
            throw new Error("FanArt isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "FanArt deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_FanArt = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newFanArt = await fanArt_Service.fanArt_service_update(id, data);

        if (!newFanArt) {
            throw new Error("FanArt isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "FanArt updated successfully",
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

module.exports = { create_FanArt, get_FanArt, delete_FanArt, update_FanArt };
