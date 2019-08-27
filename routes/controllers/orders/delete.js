module.exports = ( req, res, next ) => {
    Order.findByIdAndDelete(req.params.id)
    .then(order => {
        res.status(200).json({msg: "Order deleted", order})
    })
    .catch(err => {
        res.status(400).json({ msg : err.message })
    })
}