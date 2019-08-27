const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category: {
        type: String
    },
    image:{
        type:String
    },
    price:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model("item", ItemSchema);