module.exports = ( req, res, next ) => {
    Order.find({})
    .populate("product") 
    .populate('user')
    .then(orders => {
        return res.status(200).json({orders})
    }).catch(err => {
        res.status(400).json({ msg: err.message })
    })
}