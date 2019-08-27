const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require('cors');

const app = express();

app.use(cors());

const db = config.get("mongoURI");

mongoose.connect(db,  {
    useNewUrlParser: true,
    useCreateIndex: true
  }).then(()=>{
    console.log("Connected to MongoDB")
}).catch( err=> {
    console.log(err)
})


app.use('/uploads', express.static("uploads"));
app.use(express.json());

app.use('/api', require("./routes/user"));
app.use('/items', require("./routes/items"));
app.use('/orders', require("./routes/orders"));
app.use('/checkout', require("./routes/checkout"));
 
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})