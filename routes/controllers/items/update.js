module.exports = ( req, res, next ) => {
    const id = req.params.id;

    const { name, description, price, category } = req.body;

    if(!name || !description || !price || !category){
        res.json({ mgs: "Please enter all fields"})
    }

    let updatedItem;

    if(req.body.image){
        updatedItem = {
            name,
            description,
            price,
            category,
            image: req.body.image
        }
    }

    else{
        const srcImg = `http://localhost:5000/uploads/${req.file.originalname}`

        updatedItem = {
            name,
            description,
            price,
            category,
            image: srcImg
        }
    }


    Item.findOneAndUpdate({_id: id }, updatedItem).then(item => {
        Item.findOne({_id: id}).then(item => {
            return res.status(200).json({msg: "Item updated", item })
        })
    }).catch(err =>{
        res.status(400).json({ msg: err.message })  
    })
}