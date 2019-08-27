module.exports = ( req, res, next ) => {
    Order.findById(req.params.id)
    .populate('product')
    .populate('user')
    .then(order => {
        if(!order){
            res.status(400).json({ msg: "Order not found" })
        }
        res.status(200).json({order})
    })
    .catch(err => {
        res.status(400).json({ msg : err.message })
    })
}