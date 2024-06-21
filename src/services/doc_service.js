const { Doc } = require("../model");

const create_doc_s = (data) => {
    return Doc.create(data);
};

const get_doc_s = () => {
    return Doc.find();
};

const delete_doc_s = (id) => {
    return Doc.findByIdAndDelete(id);
};

module.exports = {
    create_doc_s,
    get_doc_s,
    delete_doc_s,
};
