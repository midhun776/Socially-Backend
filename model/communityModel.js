const mongoose = require('mongoose')
const db = require('../config/db')
const bcrypt = require("bcrypt");

const { Schema } = mongoose
 
const communitySchema = new Schema({
    communityName: { type:String, required: true },
    communityCreator: { type:String, required: true },
    members: { type:Array, required: true },
    tagline: { type:String, required: true },
    rating: { type:Array, required: true },
    about: { type:String, required: true },
});

const CommunityModel = db.model('Communities', communitySchema)
    
module.exports = CommunityModel;