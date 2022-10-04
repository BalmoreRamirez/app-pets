const fs = require('fs')
const express = require('express')
const router = express.Router()

const PATH_ROUTES = __dirname

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    // include file index
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
        console.log('CARGAR RUTA ---->', fileWithOutExt)
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router