module.exports = ( req, res, next ) => {
    const { name, price, description, category } = req.body;

    if(!name || !description || !price || !category){
        res.json({ mgs: "Please enter all fields"})
    }

    const srcImg = `https://pokemmerce.herokuapp.com/uploads/${req.file.originalname}`

    const newItem = new Item({
        name,
        description,
        price,
        category,
        image: srcImg
    })

    newItem.save().then( item => {
        return res.status(200).json({ msg: "Item succesfully added!", item })
    }).catch(err =>{
        res.status(400).json({ msg: err.message })
    })
}