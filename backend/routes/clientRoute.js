let express = require('express')
let router = express.Router()
let clientController = require('../controller/clientControler.js')
let uploads  = require('../multerConfig.js')

router.post('/clientSave',uploads.single('image'), clientController.clientSave)

router.post('/clientLogin', clientController.clientLogin)






module.exports = router