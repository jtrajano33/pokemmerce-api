const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = ( req, res )=> {
    const { email, password } = req.body;

    if( !email || !password ){
        return res.status(400).json({ msg: "Please enter all fields" })
    }


    User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(400).json({ msg: "Invalid Credentials" })
            }

            bcrypt.compare(password, user.password, (err, result) => {
                if(err){
                    return res.status(400).json({ msg: err })
                }
        
                else if(result){
                    jwt.sign(
                        { id: user.id },
                        config.get("jwtSecret"),
                        { expiresIn: 3600 },
                        (err, token) => {
        
                            if(err) throw err;
         
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    role: user.role 
                                }
                            })
                        }
                    )
                }

                else{
                    return res.status(400).json({ msg: "Invalid credentials" })
                }
            })


        })
}