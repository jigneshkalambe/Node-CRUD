const { item_Service } = require("../services");

const create_Item = async (req, res) => {
    try {
        const data = req.body;
        const newItem = await item_Service.item_service_post(data);
        if (!newItem) {
            throw new Error("Item isnt created");
        }
        res.status(200).json({
            success: true,
            data: newItem,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_Item = async (req, res) => {
    try {
        const newItem = await item_Service.item_service_get();
        if (!newItem) {
            throw new Error("Item isnt created");
        }
        res.status(200).json({
            success: true,
            message: newItem,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_Item = async (req, res) => {
    try {
        const id = req.body.id;
        const newItem = await item_Service.item_service_delete(id);

        if (!newItem) {
            throw new Error("Item isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Item deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_Item = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newItem = await item_Service.item_service_update(id, data);

        if (!newItem) {
            throw new Error("Item isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Item updated successfully",
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

module.exports = {
    create_Item,
    get_Item,
    delete_Item,
    update_Item,
};
