const getOrders = require("./get");
const getOneOrder = require("./getById");
const addOrder = require("./post");
const deleteOrder = require("./delete");

module.exports = {
    getOrders,
    getOneOrder,
    addOrder,
    deleteOrder
}