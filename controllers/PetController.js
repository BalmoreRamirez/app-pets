const mongoose = require("mongoose");
const {handleHttpError} = require("../utils/handleHttpError");
const {matchedData} = require("express-validator");
const {PetModel} = require("../models");

/**
 * display information of a pet
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getPet = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await PetModel.findById(id)
        res.send({data})
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_GET_PET");
    }
};
/**
 * show many pet information
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getPets = async (req, res) => {
    try {
        const user = req.user
        const data = await PetModel.find({})
        res.send({data, user})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_PET");
    }
};

/**
 * store information about a pet
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const savePet = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await PetModel.create(body)
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_POST_PET")
    }
};

/**
 * update information about a pet
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const putPet = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await PetModel.findOneAndUpdate(
            id, body
        )
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_PET")
    }
};
/**
 * delete information about a pet
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deletePet = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        // const data = await tracksModel.deleteOne({_id:id}) borrado fisico
        const data = await PetModel.delete({_id: id})
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_PET");
    }
};

module.exports = {getPet, getPets, savePet, putPet, deletePet};