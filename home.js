var express=require('express')
var router = express.Router()
var mongoose=require('mongoose')

const UserModel = require("./model/userModel")

router.get('/',function(req,res){
    res.send("Socially Backend")
})

router.post('/addUser', function(req,res) {
 
})

module.exports=router