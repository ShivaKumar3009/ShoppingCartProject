var express=require('express')
var mysql = require('mysql')
const bodyParser=require('body-parser')
var app=express()
app.use(express.static('./Register'))
app.use(bodyParser.urlencoded({extended:false}))
app.get('/',function(req,res){
    res.sendFile('Register.html',{root:__dirname})
})
 var connection = mysql.createConnection({
    host: 'localhost',
    user: 'ShivaKumar',
    password: 'shiva',
    database: 'demo'
  }) 

  
    connection.connect(function(err){
    if (err) throw err
    console.log('connected')
}) 


app.get('/submit',function(req,res){
    
    var sql="insert into demouser values(null,'"+req.body.uname+"','"+req.body.email+"','"+req.body.password+"',"+req.body.phone+")"
    connection.query(sql, function (err) {
        if (err) throw err
        res.sendFile('index.html',{root:__dirname})
    })
    
    connection.end()
}) 
 
app.listen(3000,()=> console.log('server connected'))