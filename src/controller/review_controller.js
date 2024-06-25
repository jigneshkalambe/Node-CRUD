const { review_Service } = require("../services");

const create_Review = async (req, res) => {
    try {
        const data = req.body;
        const newReview = await review_Service.review_service_post(data);
        if (!newReview) {
            throw new Error("Review isnt created");
        }
        res.status(200).json({
            success: true,
            message: newReview,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Review = async (req, res) => {
    try {
        const newReview = await review_Service.review_service_get();
        if (!newReview) {
            throw new Error("Review isnt created");
        }
        res.status(200).json({
            success: true,
            message: newReview,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Review = async (req, res) => {
    try {
        const id = req.body.id;
        const newReview = await review_Service.review_service_delete(id);

        if (!newReview) {
            throw new Error("Review isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Review = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newReview = await review_Service.review_service_update(id, data);

        if (!newReview) {
            throw new Error("Review isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Review updated successfully",
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

module.exports = { create_Review, get_Review, delete_Review, update_Review };
