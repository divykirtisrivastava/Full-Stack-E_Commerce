let express = require('express')
let router = express.Router()
let productController = require('../controller/productController')

router.post('/productSave', productController.productSave )


module.exports = router