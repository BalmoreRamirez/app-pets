const express = require("express");
const router = express.Router();
const {validatorGetAdopter, validatorCreateAdopter} = require("../validators/adopter")
const authMiddleware = require("../middlewares/session")
const checkRol = require("../middlewares/rol")

const {
    getAdopter,
    getAdopters,
    saveAdopter,
    putAdopter,
    deleteAdopter
} = require("../controllers/AdopterController");

router.get("/", authMiddleware, checkRol(['user']), getAdopters)
router.get("/:id",authMiddleware, checkRol(['admin']), validatorGetAdopter, getAdopter)
router.post("/",authMiddleware, checkRol(['admin']), validatorCreateAdopter, saveAdopter)
router.put("/:id",authMiddleware, checkRol(['admin']), validatorGetAdopter, validatorCreateAdopter, putAdopter,)
router.delete("/:id",authMiddleware, checkRol(['admin']), validatorGetAdopter, deleteAdopter)


module.exports = router;
