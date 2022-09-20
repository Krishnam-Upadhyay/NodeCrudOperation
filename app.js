
const express = require('express');
const bodyParser= require('body-parser');
const PeopleApp = require('./people');
const mysqlConnection = require('./connection')
const path = require('path')


var app = express();

app.use(express.static('./content'))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"))
})

app.get('/serv',(req,res)=>{
    mysqlConnection.query('select * from people',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
            console.log(rows);
        }
        else{
            console.log(err);

        }
    })})




app.listen(5000,()=>{
    console.log('server started on  port: ');
})

