/**
 * array con los roles permitidos
 * @param rol
 * @returns {(function(*, *, *): void)|*}
 */
const {handleHttpError} = require("../utils/handleHttpError");


const checkRol = (roles) => (req, res, next) => {
    try {
        const {user} = req
        console.log({user})
        const rolesByUser = user.rol


        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)) // Todo: true, false

        if (!checkValueRol) {
            handleHttpError(res, "USER_NOT_PERMISSIONS", 403)
            return
        }
        next()
    } catch (e) {
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
}

module.exports = checkRol