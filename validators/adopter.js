const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateAdopter = [
    check("name").exists().notEmpty(),
    check("lastname").exists().notEmpty(),
    check("telephone").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validatorGetAdopter = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = { validatorCreateAdopter, validatorGetAdopter };
