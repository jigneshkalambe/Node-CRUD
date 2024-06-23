const { admin_Service } = require("../services");

const create_admin = async (req, res) => {
    try {
        const data = req.body;
        const newAdmin = await admin_Service.create_admin_S(data);
        if (!newAdmin) {
            throw new Error("Admin isnt created");
        }
        res.status(200).json({
            success: true,
            message: newAdmin,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Admin = async (req, res) => {
    try {
        const data = req.body;
        const newAdmin = await admin_Service.get_admin();
        if (!newAdmin) {
            throw new Error("Admin isnt created");
        }
        res.status(200).json({
            success: true,
            message: newAdmin,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_admin = async (req, res) => {
    try {
        const id = req.body.id;
        const newAdmin = await admin_Service.delete_Admin(id);

        if (!newAdmin) {
            throw new Error("Admin isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Admin deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_admin = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        // console.log("ID", id, "DATA", data);
        const newAdmin = await admin_Service.update_Admin(id, data);

        if (!newAdmin) {
            throw new Error("Admin isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Admin updated successfully",
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

module.exports = { create_admin, get_Admin, delete_admin, update_admin };
