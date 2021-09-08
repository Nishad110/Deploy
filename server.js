const express = require('express')
const app = express()
const mysql= require('mysql')
const cors = require('cors')
const path=require('path')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded());



//conn.connect(()=>console.log("Success"))
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

app.use('/addemp', require('./actions/addEmployee'))
app.use('/listemployee', require('./actions/empList'))
app.use('/viewemployee', require('./actions/viewEmployee'))
app.use('/updateemployee', require('./actions/updateEmployee'))
app.use('/deleteemployee', require('./actions/deleteEmployee'))

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

