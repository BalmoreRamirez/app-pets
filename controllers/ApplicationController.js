const mongoose = require("mongoose");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleHttpError");
const { ApplicationModel} = require("../models");


/**
 * display information of an application
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getApplication = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await ApplicationModel.findById(id)
        res.send({data})
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_GET_APPLICATION");
    }
};
/**
 * show many application information
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getApplications = async (req, res) => {
    try {
        const user = req.user
        const data = await ApplicationModel.find({})
        res.send({data, user})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_APPLICATION");
    }
};
/**
 * store information about an application
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const saveApplication = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await ApplicationModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_POST_APPLICATION")
    }
};
/**
 * update information about an application
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const putApplication = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await ApplicationModel.findOneAndUpdate(
            id, body
        )
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_APPLICATION")
    }
};
/**
 * delete information about an application
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteApplication = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        // const data = await tracksModel.deleteOne({_id:id}) borrado fisico
        const data = await ApplicationModel.delete({_id: id}) // borrado logico
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_APPLICATION");
    }
};



module.exports = { getApplication, getApplications, saveApplication, putApplication, deleteApplication };