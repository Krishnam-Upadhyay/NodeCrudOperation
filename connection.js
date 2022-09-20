const mysql  =require('mysql');
var mysqlConnection = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'Krishnam11',
    database:'eureka'
   

    
})
mysqlConnection.connect((err)=>{
    if(!err){
        console.log('connected')
    }
    else{
    throw err}


})

module.exports = mysqlConnection;