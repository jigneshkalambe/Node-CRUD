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
module.exports = { create_admin, get_Admin };
