const mongoose = require("mongoose");
const {matchedData} = require("express-validator");
const {handleHttpError} = require("../utils/handleHttpError");
const {AdopterModel} = require("../models");

/**
 * display information of an adoptive
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAdopter = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await AdopterModel.findById(id)
        res.send({data})
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_GET_ADOPTER");
    }
};

/**
 * show many adopter information
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAdopters = async (req, res) => {
    try {
        const user = req.user
        const data = await AdopterModel.find({})
        res.send({data, user})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ADOPTER");
    }
};

/**
 * store information about an adopter
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const saveAdopter = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await AdopterModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_POST_ADOPTER")
    }
};

/**
 * update information about an adopter
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const putAdopter = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await AdopterModel.findOneAndUpdate(
            id, body
        )
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ADOPTER")
    }
};

/**
 * delete information about an adopter
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteAdopter = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        // const data = await tracksModel.deleteOne({_id:id}) borrado fisico
        const data = await AdopterModel.delete({_id: id}) // borrado logico
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ADOPTER");
    }
};

module.exports = {getAdopter, getAdopters, saveAdopter, putAdopter, deleteAdopter};