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


router.post('/', (req, res) => {
    
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address
    const age = req.body.age

    conn.query(`insert into Emp (Name, Address, Email, Phone, Age) values ('${name}','${address}','${email}','${phone}','${age}')`,
        (err, result) => {
            if (err) {
                console.log("Something went wrong",err)
            } else {
                console.log("Data Inserted")
            }
                
        })
})

module.exports = router;



