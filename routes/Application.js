const express = require("express");
const router = express.Router();
const {validatorCreateApplication, validatorGetApplication} = require("../validators/application")
const authMiddleware = require("../middlewares/session")
const checkRol = require("../middlewares/rol")

const {
    getApplication,
    getApplications,
    saveApplication,
    putApplication,
    deleteApplication
} = require("../controllers/ApplicationController");

router.get("/:id", validatorGetApplication, getApplication)
router.get("/", getApplications)
router.post("/", validatorCreateApplication, saveApplication)
router.put("/:id", validatorGetApplication, validatorCreateApplication, putApplication)
router.delete("/:id", validatorGetApplication, deleteApplication)


module.exports = router;
