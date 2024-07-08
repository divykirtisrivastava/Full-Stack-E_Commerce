let db = require('../databaseConfig.js')
let bcrypt  = require('bcryptjs')

exports.clientSave = async (req, res)=>{
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password

  let hash = await bcrypt.hash(password, 10)

  let image = req.file.filename
    let value = [[username,email,hash, image]]
    db.query('insert into clientDetail(username,email,password,image) values ?', [value], (err, result)=>{
        if(err) throw err
        else{
           res.send("data saved")
        }
    })
}

exports.clientLogin = (req, res)=>{
    let email = req.body.email
    let password = req.body.password  //user at login
    let sql  = "select * from clientdetail where email = ?"
    db.query(sql, [email], (err, result)=>{
       
         if(err)  throw err;else{
            // result[0].password :- database saved password
           bcrypt.compare(password, result[0].password, (err, isMatch)=>{
            if(err) throw err
            else{
                if(isMatch == true){
                    res.send(true)
                }else{
                    res.send(false)
                }
            }
           })
        }
    })

}


exports.createClient = (req, res)=>{
    let unique = req.params.unique
      
let clientTableQuery  = `CREATE TABLE if not exists ${unique} (
    id INT NOT NULL AUTO_INCREMENT,
    productBrand VARCHAR(255) NULL,
    productPrice VARCHAR(255) NULL,
    productRating VARCHAR(255) NULL,
    productType VARCHAR(255) NULL,
    image VARCHAR(255) NULL,
    PRIMARY KEY (id));`

    db.query(clientTableQuery, (err, result)=>{
        if(err) throw err
        else{
            console.log("client Table created")
        }
    })
}

exports.getClient = (req, res)=>{
    let unique =req.params.unique

    let sql ='select * from clientdetail where email= ?'

    db.query(sql, [unique + '@gmail.com'],(err, result)=>{
        if (err) throw err;
        else{
            res.json(result)
        }
    })
}




