const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const userController = require("./controllers");

const userValidator = (require("../validations/registrationValidation"))

const User = require("../models/User");

 

router.post("/user", userValidator, userController.signUp );

router.post("/auth", userController.signIn );

router.post("/auth/me", auth, userController.me );


module.exports = router;