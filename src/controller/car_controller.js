const { car_Service } = require("../services");

const post_car = async (req, res) => {
    try {
        const data = req.body;
        const newCar = await car_Service.create_car(data);
        if (!newCar) {
            throw new Error("Car didnt create");
        }

        res.status(200).json({ message: "Car created", data: newCar });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const get_car = async (req, res) => {
    try {
        const newCar = await car_Service.get_carList();
        if (!newCar) {
            throw new Error("Car didnt get");
        }
        res.status(200).json({ message: "Car list Got Successfully", data: newCar });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const delete_car = async (req, res) => {
    try {
        // const id = req.params.id;
        const id = req.body.id;
        const newCar = await car_Service.delete_Cars(id);
        if (!newCar) {
            throw new Error("Car didnt delete");
        }
        res.status(200).json({ message: "Car deleted Successfully", data: newCar });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const update_car = async (req, res) => {
    try {
        // const id = req.params.id;
        const id = req.body.id;
        const data = req.body;
        const newCar = await car_Service.update_Cars(id, data);
        if (!newCar) {
            throw new Error("Car didnt update");
        }
        res.status(200).json({ message: "Car updated Successfully", data: newCar });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { post_car, get_car, delete_car, update_car };
