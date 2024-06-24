const { topic_Service } = require("../services");

const create_Topic = async (req, res) => {
    try {
        const data = req.body;
        const newTopic = await topic_Service.topic_service_post(data);
        if (!newTopic) {
            throw new Error("Topic isnt created");
        }
        res.status(200).json({
            success: true,
            message: newTopic,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Topic = async (req, res) => {
    try {
        const newTopic = await topic_Service.topic_service_get();
        if (!newTopic) {
            throw new Error("Topic isnt created");
        }
        res.status(200).json({
            success: true,
            message: newTopic,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Topic = async (req, res) => {
    try {
        const id = req.body.id;
        const newTopic = await topic_Service.topic_delete(id);

        if (!newTopic) {
            throw new Error("Topic isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Topic deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Topic = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newTopic = await topic_Service.topic_update(id, data);

        if (!newTopic) {
            throw new Error("Topic isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Topic updated successfully",
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

module.exports = { create_Topic, get_Topic, delete_Topic, update_Topic };
