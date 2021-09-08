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


router.get('/', (req, res) => {
    
    

    conn.query(`select * from Emp;`,
        (err, result) => {
            if (err) {
                console.log("Something went wrong",err)
            } else {
                res.send(result)
                //console.log("Success",result)
            }
                
        })
})

module.exports = router;



