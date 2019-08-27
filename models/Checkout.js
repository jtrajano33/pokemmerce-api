const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zipCode:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
    orders:{
        type: [Object],
        required: true
    },
    
    requestedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = CheckOut = mongoose.model("checkout", checkoutSchema);