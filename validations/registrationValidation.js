const Joi = require('joi');

module.exports = ( req, res, next ) =>{
    const schema = Joi.object().keys({
        name: Joi.string().trim()
                .required()
                .min(3)
                .error((errors) => {
                    return errors.map(error => {
                      switch (error.type) {
                        case "string.min":
                          return { message: "Name must be at least 3 Characters." };
                        case "any.empty":
                          return { message: "Name is required." };
                        case "string.alphanum":
                            return {message: "Name must be an alphanumeric character."};
                        case "string.base":
                            return {message: "Name must be a string."}
                        default:
                            return {message: "Error.Please enter your name again."}
                      }
                    }
                    )
                  }),
        password: Joi.string()
                    .min(5)
                    .max(20)
                    .required()
                    .error((errors) => {
                        return errors.map(error => {
                          switch (error.type) {
                            case "string.min":
                              return { message: "Password must be at least 5 characters" };
                            case "any.empty":
                              return { message: "Password is required" };
                            case "string.max":
                                return {message: "Password must be must not exceed 20 characters"};
                            case "string.base":
                                return {message: "Password must be a string"}
                            default:
                                return {message: "Error.Please enter your password again."}
                          }
                        }
                        )
                      }),
        email: Joi.string()
                .email({ minDomainSegments: 2 })
                .required()
                .error((errors) => {
                    return errors.map(error => {
                      switch (error.type) {
                        case "any.empty":
                          return { message: "Email is required" };
                        case "string.base":
                            return {message: "Email must be a string"};
                        case "string.email":
                            return {message: "Email must be a valid email address"};
                        default:
                            return {message: "Error.Please enter your email again."}
                      }
                    }
                    )
                  })
    })

    Joi.validate(req.body, schema, (err,result)=>{
        if(err){
            res.status(400).json({msg: err.details[0].message})
        }
        else{
            next()
        }
    })
}