const mongoose = require("mongoose")

const connection = mongoose.createConnection("mongodb+srv://ddukkseeroo:5tVWtU7cDHhONweC@socially.pokzs65.mongodb.net/Socially"). on('open', () => {
    console.log("MongoDB Connected!!");
}).on('error', () => {
    console.log("MongoDB connection error!");
})

module.exports = connection