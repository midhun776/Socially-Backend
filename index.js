const app = require("./app");
const db = require('./config/db')

app.listen(3000,function(req,res){
    console.log("Server started!")
})