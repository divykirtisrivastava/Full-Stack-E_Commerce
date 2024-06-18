let express = require('express')
let router = express.Router()
let productController = require('../controller/productController')

router.post('/productSave', productController.productSave )

router.get('/getProduct', productController.getProduct)

router.get('/getProductById/:id', productController.getProductById)


router.delete('/deleteProduct/:id', productController.deleteProduct)

router.put('/updateProduct/:id', productController.updateProduct)

router.get('/searchProduct/:inp', productController.searchProduct)

module.exports = router