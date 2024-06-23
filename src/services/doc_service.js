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

const update_Doc = (id, data) => {
    return Doc.findByIdAndUpdate(id, data);
};

module.exports = {
    create_doc_s,
    get_doc_s,
    delete_doc_s,
    update_Doc,
};
