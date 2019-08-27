const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Item = require("../models/Item");

const OrderController = require("./controllers/orders");


router.post("/", OrderController.addOrder );

router.get("/", OrderController.getOrders );

router.get("/:id", OrderController.getOneOrder );

router.delete("/:id", OrderController.deleteOrder );
 

module.exports = router;