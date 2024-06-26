const { user_Service } = require("../services");

const create_User = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await user_Service.user_service_post(data);
        if (!newUser) {
            throw new Error("User isnt created");
        }
        res.status(200).json({
            success: true,
            message: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_User = async (req, res) => {
    try {
        const newUser = await user_Service.user_service_get();
        if (!newUser) {
            throw new Error("User isnt created");
        }
        res.status(200).json({
            success: true,
            message: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_User = async (req, res) => {
    try {
        const id = req.body.id;
        const newUser = await user_Service.user_service_delete(id);

        if (!newUser) {
            throw new Error("User isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_User = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newUser = await user_Service.user_service_update(id, data);

        if (!newUser) {
            throw new Error("User isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
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

module.exports = { create_User, get_User, delete_User, update_User };
