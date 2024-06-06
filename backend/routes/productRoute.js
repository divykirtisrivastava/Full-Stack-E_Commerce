let express = require('express')
let router = express.Router()
let productController = require('../controller/productController')

router.post('/productSave', productController.productSave )

router.get('/getProduct', productController.getProduct)

router.delete('/deleteProduct/:id', productController.deleteProduct)


module.exports = router