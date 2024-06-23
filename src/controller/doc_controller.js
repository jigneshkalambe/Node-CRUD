const { doc_Service } = require("../services");

const create_doc_c = async (req, res) => {
    try {
        const data = req.body;
        const newDoc = await doc_Service.create_doc_s(data);

        if (!newDoc) {
            throw new Error("Not Created");
        }

        res.status(200).json({
            success: true,
            message: "Doc created",
            data: newDoc,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_doc_data = async (req, res) => {
    try {
        const newDoc = await doc_Service.get_doc_s();

        if (!newDoc) {
            throw new Error("Not Created");
        }

        res.status(200).json({
            success: true,
            message: "Doc created",
            data: newDoc,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_doc = async (req, res) => {
    try {
        const id = req.body.id;
        // const id = req.params.id;
        console.log(id);
        const deletedDoc = await doc_Service.delete_doc_s(id);
        res.status(200).json({
            success: true,
            message: "Deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Deleted unsuccessfully",
        });
    }
};

const update_doc = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newDoc = await doc_Service.update_Doc(id, data);

        if (!newDoc) {
            throw new Error("Admin isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Admin updated successfully",
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
    create_doc_c,
    get_doc_data,
    delete_doc,
    update_doc,
};
