module.exports = ( req, res, next ) => {
    const { quantity, itemId, userId } = req.body;

    Item.findById(itemId)
    .then(item => {
        if(!item) return res.status(400).json({ msg: "Item not found"})

        const newOrder = new Order({
            quantity,
            product: itemId,
            user: userId
        })

        newOrder.save().then(order => {
            Order.findOne({_id: order._id}).then(order => {
                res.status(201).json({ msg: "Pokemon added to cart", order })
            })
 
        })
    })
    .catch(err => {
        res.status(400).json({msg: err.message})
    })
}