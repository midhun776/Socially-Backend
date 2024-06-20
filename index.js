var express=require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/socially')
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','./views')

var home=require('./home')
app.use('/',home)

app.listen(3000,function(req,res){
    console.log("Server started!")
})