const { crew_Service } = require("../services");

const create_Crew = async (req, res) => {
    try {
        const data = req.body;
        const newCrew = await crew_Service.crew_service_post(data);
        if (!newCrew) {
            throw new Error("Crew isnt created");
        }
        res.status(200).json({
            success: true,
            data: newCrew,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Crew = async (req, res) => {
    try {
        const newCrew = await crew_Service.crew_service_get();
        if (!newCrew) {
            throw new Error("Crew isnt created");
        }
        res.status(200).json({
            success: true,
            data: newCrew,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Crew = async (req, res) => {
    try {
        const id = req.body.id;
        const newCrew = await crew_Service.crew_service_delete(id);

        if (!newCrew) {
            throw new Error("Crew isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Crew deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Crew = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newCrew = await crew_Service.crew_service_update(id, data);

        if (!newCrew) {
            throw new Error("Crew isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Crew updated successfully",
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

module.exports = { create_Crew, get_Crew, delete_Crew, update_Crew };
