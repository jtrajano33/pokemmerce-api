module.exports = ( req, res, next ) => {
    Item.findById(req.params.id).then(item => {
        res.json({ item })
    }).catch(err =>{
        res.status(400).json({ msg: err.message })
    })
}