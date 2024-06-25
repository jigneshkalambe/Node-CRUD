const { award_Service } = require("../services");

const create_Award = async (req, res) => {
    try {
        const data = req.body;
        const newAward = await award_Service.award_service_post(data);
        if (!newAward) {
            throw new Error("Award isnt created");
        }
        res.status(200).json({
            success: true,
            message: newAward,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Award = async (req, res) => {
    try {
        const newAward = await award_Service.award_service_get();
        if (!newAward) {
            throw new Error("Award isnt created");
        }
        res.status(200).json({
            success: true,
            message: newAward,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Award = async (req, res) => {
    try {
        const id = req.body.id;
        const newAward = await award_Service.award_service_delete(id);

        if (!newAward) {
            throw new Error("Award isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Award deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Award = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newAward = await award_Service.award_service_update(id, data);

        if (!newAward) {
            throw new Error("Award isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Award updated successfully",
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

module.exports = { create_Award, get_Award, delete_Award, update_Award };
