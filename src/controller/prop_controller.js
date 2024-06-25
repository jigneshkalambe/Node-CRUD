const { prop_Service } = require("../services");

const create_Prop = async (req, res) => {
    try {
        const data = req.body;
        const newProp = await prop_Service.prop_service_post(data);
        if (!newProp) {
            throw new Error("Props isnt created");
        }
        res.status(200).json({
            success: true,
            data: newProp,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Prop = async (req, res) => {
    try {
        const newProp = await prop_Service.prop_service_get();
        if (!newProp) {
            throw new Error("Props isnt created");
        }
        res.status(200).json({
            success: true,
            data: newProp,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Prop = async (req, res) => {
    try {
        const id = req.body.id;
        const newProp = await prop_Service.prop_service_delete(id);

        if (!newProp) {
            throw new Error("Props isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Props deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Prop = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newProp = await prop_Service.prop_service_update(id, data);

        if (!newProp) {
            throw new Error("Props isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Props updated successfully",
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

module.exports = { create_Prop, get_Prop, delete_Prop, update_Prop };
