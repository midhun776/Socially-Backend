var express=require('express')
var router = express.Router()
var mongoose=require('mongoose')

router.get('/',function(req,res){
    res.send("Socially Backend")
})

module.exports=router