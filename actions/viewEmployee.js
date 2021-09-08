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


router.get('/:empid', (req, res) => {
    
    var emp_id = req.params.empid

    conn.query(`select * from Emp where Empid='${emp_id}';`,
        (err, result) => {
            if (err) {
                console.log("Something went wrong",err)
            } else {
                res.send(result)
                console.log("Employee Found",result)
            }
                
        })
})

module.exports = router;



