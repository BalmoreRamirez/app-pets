const {handleHttpError} = require("../utils/handleHttpError");
const {verifyToken} = require("../utils/handleJwt");
const {UserModel} = require("../models")
const getProperties = require("../utils/handlePropertiesEngine")


const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NEED_SESSION", 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop()
        const datatoken = await verifyToken(token)

        if (!datatoken._id) {
            handleHttpError(res, "ERROR_ID_TOKEN", 401)
            return
        }

        const user = await UserModel.findById(datatoken._id)
        req.user = user
        next()

    } catch (e) {
        console.log(e)
        handleHttpError(res, "NOT_SESSION", 401)
    }
}


module.exports = authMiddleware