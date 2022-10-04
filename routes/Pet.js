const express = require("express");
const router = express.Router();
const {validatorCreatePet, validatorGetPet} = require("../validators/pet")
const authMiddleware = require("../middlewares/session")
const checkRol = require("../middlewares/rol")

const {getPet, getPets, savePet, putPet, deletePet} = require("../controllers/PetController");

router.get("/:id",validatorGetPet, getPet)
router.get("/", getPets)
router.post("/", validatorCreatePet, savePet)
router.put("/:id", validatorGetPet, validatorCreatePet, putPet)
router.delete("/:id",validatorGetPet, deletePet)


module.exports = router;
