const express = require("express");
const router = express.Router();

const CheckOut = require("../models/Checkout");
const Order = require("../models/Order")


router.post("/", (req,res,next)=>{
    const {
        address,
        city,
        state,
        zipCode,
        country,
        contactNumber,
        orders
    } = req.body

    if(!address || !city || !state || !zipCode || !country || !contactNumber || !orders){
        return res.status(400).json({msg: "Please enter all fields to proceed"})
    }

    const newOrder = new CheckOut(req.body)

    newOrder.save(req.body)
    .then(order => {
        const orderId = order.orders.map(item => {
            return item._id
        })
        
        orderId.forEach(id => {
            Order.findByIdAndDelete(id).then(order => {
                res.json({msg: "Order succesfully removed", order })
            }).catch(err =>{
                res.status(400).json({ msg: err.message })
            })
        });
    })
    .catch(err => {
        res.status(400).json({msg: err.message})
    })


});



module.exports = router;