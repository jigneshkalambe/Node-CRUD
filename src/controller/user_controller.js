const { user_Service } = require("../services");

const create_user_c = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await user_Service.get_user_service(data);

        if (!newUser) {
            throw new Error("Didnt got newuser");
        }

        res.status(200).json({
            success: true,
            data: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_user_c = async (req, res) => {
    try {
        const newUser = await user_Service.get_user_service_get();

        if (!newUser) {
            throw new Error("Didnt got newuser");
        }

        res.status(200).json({
            success: true,
            data: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { create_user_c, get_user_c };
