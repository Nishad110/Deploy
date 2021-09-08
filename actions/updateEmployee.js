const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const conn = mysql.createConnection({
    user : 'sql5435131',
    host : 'sql5.freesqldatabase.com',
    password : 'ipWPrQ9uBS',
    database : 'sql5435131'
});

//conn.connect(()=>console.log("Success"))


router.put('/:empid', (req, res) => {
    
    const empid = req.params.empid
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address
    const age = req.body.age

    conn.query(`update Emp set Name='${name}',Address='${address}',Email='${email}',Phone='${phone}',Age='${age}' where Empid='${empid}'`,
        (err, result) => {
            if (err) {
                console.log("Something went wrong",err)
            } else {
                console.log("Data updated")
                res.send(result)
            }
                
        })
})

module.exports = router;



