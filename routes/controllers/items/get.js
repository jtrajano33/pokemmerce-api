module.exports = ( req, res, next ) =>{
    Item.find({}).then(items => {
       return res.status(200).json({ items })
    }).catch(err =>{
        res.status(400).json({ msg: err.message })
    })
} 