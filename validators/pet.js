const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreatePet = [
    check("name").exists().notEmpty(),
    check("race").exists().notEmpty(),
    check("age").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("inadoption").exists().notEmpty(),
    check("petstate.vaccines").exists().notEmpty(),
    check("petstate.description").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validatorGetPet = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = { validatorCreatePet, validatorGetPet };
