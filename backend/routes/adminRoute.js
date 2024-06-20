const express  = require('express')
let router = express.Router()
let adminController  = require('../controller/adminController')

router.post('/adminLogin', adminController.adminLogin)

module.exports = router