let db = require('../databaseConfig.js')

exports.clientSave =  (req, res)=>{
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
  let image = req.file.filename
    let value = [[username,email,password, image]]
    db.query('insert into clientDetail(username,email,password,image) values ?', [value], (err, result)=>{
        if(err) throw err
        else{
           res.send("data saved")
        }
    })
}

exports.clientLogin = (req, res)=>{
    let email = req.body.email
    let password = req.body.password

    let sql  = "select * from clientdetail where email = ? and password  = ?"
    db.query(sql, [email, password], (err, result)=>{
        if(err)  throw err;
        else{
            if(result.length > 0){
                res.send(true)
            }else{
                res.send(false)
            }
        }
    })

}