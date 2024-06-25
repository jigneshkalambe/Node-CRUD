const { script_Service } = require("../services");

const create_Script = async (req, res) => {
    try {
        const data = req.body;
        const newScript = await script_Service.script_service_post(data);
        if (!newScript) {
            throw new Error("Script isnt created");
        }
        res.status(200).json({
            success: true,
            data: newScript,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Script = async (req, res) => {
    try {
        const newScript = await script_Service.script_service_get();
        if (!newScript) {
            throw new Error("Script isnt created");
        }
        res.status(200).json({
            success: true,
            data: newScript,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Script = async (req, res) => {
    try {
        const id = req.body.id;
        const newScript = await script_Service.script_service_delete(id);

        if (!newScript) {
            throw new Error("Script isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Script deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Script = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newScript = await script_Service.script_service_update(id, data);

        if (!newScript) {
            throw new Error("Script isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Script updated successfully",
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

module.exports = { create_Script, get_Script, delete_Script, update_Script };
