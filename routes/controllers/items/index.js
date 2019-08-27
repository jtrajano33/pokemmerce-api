const getItems = require("./get");
const addItem = require("./post");
const deleteItem = require("./delete");
const updateItem = require("./update");
const getOneItem = require("./getById");

module.exports = {
    getItems,
    addItem,
    deleteItem,
    updateItem,
    getOneItem
}