const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password: "9140977313",
    database:"e-commerce"
})

module.exports = connection