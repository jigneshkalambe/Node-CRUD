const { actor_Service } = require("../services");

const create_Actor = async (req, res) => {
    try {
        const data = req.body;
        const newActor = await actor_Service.actor_service_post(data);
        if (!newActor) {
            throw new Error("Actor isnt created");
        }
        res.status(200).json({
            success: true,
            message: newActor,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Actor = async (req, res) => {
    try {
        const newActor = await actor_Service.actor_service_get();
        if (!newActor) {
            throw new Error("Actor isnt created");
        }
        res.status(200).json({
            success: true,
            message: newActor,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Actor = async (req, res) => {
    try {
        const id = req.body.id;
        const newActor = await actor_Service.actor_service_delete(id);

        if (!newActor) {
            throw new Error("Actor isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Actor deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Actor = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newActor = await actor_Service.actor_service_update(id, data);

        if (!newActor) {
            throw new Error("Actor isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Actor updated successfully",
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

module.exports = { create_Actor, get_Actor, delete_Actor, update_Actor };
