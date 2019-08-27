module.exports = ( req, res, next ) =>{
    const id = req.params.id;

    Item.findByIdAndDelete(id).then(item => {
        res.json({msg: "Item succesfully removed", item })
    }).catch(err =>{
        res.status(400).json({ msg: err.message })
    })
}