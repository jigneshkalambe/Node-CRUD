const { content_Service } = require("../services");

const create_Content = async (req, res) => {
    try {
        const data = req.body;
        const newContent = await content_Service.content_service_post(data);
        if (!newContent) {
            throw new Error("Content isnt created");
        }
        res.status(200).json({
            success: true,
            message: newContent,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Content = async (req, res) => {
    try {
        const newContent = await content_Service.content_service_get();
        if (!newContent) {
            throw new Error("Content isnt created");
        }
        res.status(200).json({
            success: true,
            message: newContent,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Content = async (req, res) => {
    try {
        const id = req.body.id;
        const newContent = await content_Service.content_delete(id);

        if (!newContent) {
            throw new Error("Content isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Content deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Content = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newContent = await content_Service.content_update(id, data);

        if (!newContent) {
            throw new Error("Content isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Content updated successfully",
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

module.exports = { create_Content, get_Content, delete_Content, update_Content };
