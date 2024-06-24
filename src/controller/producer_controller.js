const { producer_Service } = require("../services");

const create_Producer = async (req, res) => {
    try {
        const data = req.body;
        const newProducer = await producer_Service.producer_service_post(data);
        if (!newProducer) {
            throw new Error("Producer isnt created");
        }
        res.status(200).json({
            success: true,
            message: newProducer,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Producer = async (req, res) => {
    try {
        const newProducer = await producer_Service.producer_service_get();
        if (!newProducer) {
            throw new Error("Producer isnt created");
        }
        res.status(200).json({
            success: true,
            message: newProducer,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Producer = async (req, res) => {
    try {
        const id = req.body.id;
        const newProducer = await producer_Service.producer_delete(id);

        if (!newProducer) {
            throw new Error("Producer isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Producer deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Producer = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newProducer = await producer_Service.producer_update(id, data);

        if (!newProducer) {
            throw new Error("Producer isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Producer updated successfully",
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

module.exports = { create_Producer, get_Producer, delete_Producer, update_Producer };
