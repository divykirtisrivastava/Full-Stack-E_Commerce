let express = require('express')
let router = express.Router()
let cartController = require('../controller/cartController')

router.post('/cartSave/:unique', cartController.cartSave )

router.get('/getCart/:unique', cartController.getCart )

router.delete('/deleteCart/:id/:unique', cartController.deleteCart )

module.exports = router