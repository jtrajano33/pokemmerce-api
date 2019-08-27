const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    quantity:{
        type: Number,
        default: 1
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = Order = mongoose.model("order", orderSchema);