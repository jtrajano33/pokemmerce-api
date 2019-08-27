module.exports = ( req, res ) => {
    User.findById(req.user.id)
        .select("-password")
        .then(user => {
            res.json(user)
        }).catch(err => {
            res.json({err})
        })
}