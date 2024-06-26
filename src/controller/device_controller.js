const { device_Service } = require("../services");

const create_Device = async (req, res) => {
    try {
        const data = req.body;
        const newDevice = await device_Service.device_service_post(data);
        if (!newDevice) {
            throw new Error("Device isnt created");
        }
        res.status(200).json({
            success: true,
            message: newDevice,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Device = async (req, res) => {
    try {
        const newDevice = await device_Service.device_service_get();
        if (!newDevice) {
            throw new Error("Device isnt created");
        }
        res.status(200).json({
            success: true,
            message: newDevice,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Device = async (req, res) => {
    try {
        const id = req.body.id;
        const newDevice = await device_Service.device_service_delete(id);

        if (!newDevice) {
            throw new Error("Device isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Device deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Device = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newDevice = await device_Service.device_service_update(id, data);

        if (!newDevice) {
            throw new Error("Device isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Device updated successfully",
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

module.exports = { create_Device, get_Device, delete_Device, update_Device };
