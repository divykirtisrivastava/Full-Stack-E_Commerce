const express = require('express')
const db  = require('./databaseConfig.js')
let productRouter = require('./routes/productRoute.js')
let app = express()
app.use(express.json())

db.connect((err)=>{
    if(err) throw err
    else{
        console.log("database connected")
    }
})

let productTableQuery  = `CREATE TABLE if not exists product (
    id INT NOT NULL AUTO_INCREMENT,
    productBrand VARCHAR(255) NULL,
    productPrice VARCHAR(255) NULL,
    productRating VARCHAR(255) NULL,
    productType VARCHAR(255) NULL,
    PRIMARY KEY (id));`

    db.query(productTableQuery, (err, result)=>{
        if(err) throw err
        else{
            console.log("product Table created")
        }
    })
  
app.use('/api', productRouter)

app.listen(3000, ()=>{
    console.log("server is running at 3000")
})