const express = require("express");

//controller of user 
const { registerCtrl, loginCtrl } = require("../controllers/UserController");

const router = express.Router();

// Validate data of user 
const {validatorRegister, validateLogin} = require("../validators/user")




router.post("/register", validatorRegister, registerCtrl)
router.post("/login", validateLogin, loginCtrl)

module.exports = router;

