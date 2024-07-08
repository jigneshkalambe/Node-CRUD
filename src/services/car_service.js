const { Car } = require("../model");

const create_car = (data) => {
    return Car.create(data);
};

const get_carList = () => {
    return Car.find();
};

const delete_Cars = (id) => {
    return Car.findByIdAndDelete(id);
};

const update_Cars = (id, data) => {
    return Car.findByIdAndUpdate(id, data);
};

module.exports = { create_car, get_carList, delete_Cars, update_Cars };
