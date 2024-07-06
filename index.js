const app=require('./app')
const db = require('./config/db');
const Usermodel=require('./model/userModel')

app.listen(3000,function(req,res){
    console.log("Server started!")
})