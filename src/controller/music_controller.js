const { music_Service } = require("../services");

const create_music_c = async (req, res) => {
    try {
        const data = req.data;
        // const newMusic = await music_Service.get_music_service(data);
        const newMusic = await music_Service.get_music_service(req.body);

        if (!newMusic) {
            throw new Error("Lol server didnt get music ");
        }
        res.status(200).json({
            success: true,
            data: newMusic,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_music_c = async (req, res) => {
    try {
        const newMusic = await music_Service.get_music_service_get();

        if (!newMusic) {
            throw new Error("Lol server didnt get music ");
        }
        res.status(200).json({
            success: true,
            data: newMusic,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_music = async (req, res) => {
    try {
        const id = req.body.id;
        const newMusic = await music_Service.delete_Music(id);

        if (!newMusic) {
            throw new Error("Music isnt deleted");
        }

        res.status(200).json({
            success: true,
            message: "Music deleted successfully",
            id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_music = async (req, res) => {
    try {
        const id = req.body.id;
        const data = req.body;
        const newMusic = await music_Service.update_Music(id, data);

        if (!newMusic) {
            throw new Error("Music isnt updated");
        }

        res.status(200).json({
            success: true,
            message: "Music updated successfully",
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
    create_music_c,
    get_music_c,
    delete_music,
    update_music,
};
