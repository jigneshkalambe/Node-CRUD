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

module.exports = {
    create_music_c,
    get_music_c,
};
