let db = require('../databaseConfig.js')

exports.cartSave =  (req, res)=>{
  let productBrand = req.body.productBrand
  let productPrice = req.body.productPrice
  let productRating = req.body.productRating
  let productType = req.body.productType
    let value = [[productBrand,productPrice,productRating,productType]]
    db.query('insert into cart(productBrand,productPrice,productRating,productType) values ?', [value], (err, result)=>{
        if(err) throw err
        else{
           res.send(true)
        }
    })
}