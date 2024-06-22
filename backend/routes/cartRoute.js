let express = require('express')
let router = express.Router()
let cartController = require('../controller/cartController')

router.post('/cartSave', cartController.cartSave )

module.exports = router