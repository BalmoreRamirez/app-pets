const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateApplication = [
    check("date").exists().notEmpty(),
    check("IdPet").exists().notEmpty(),
    check("IdAdopter").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validatorGetApplication = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = { validatorGetApplication, validatorCreateApplication };
