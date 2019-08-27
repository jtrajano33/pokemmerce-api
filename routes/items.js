const express = require("express");
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
});

const Item = require("../models/Item");

const ItemController = require("./controllers/items");

router.get("/", ItemController.getItems );

router.get("/:id", ItemController.getOneItem );

router.post("/", upload.single('productImage') , ItemController.addItem );

router.delete("/:id", ItemController.deleteItem );

router.put("/:id", upload.single('productImage'), ItemController.updateItem );

module.exports = router;