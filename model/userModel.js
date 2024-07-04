const mongoose = require('mongoose')
const db = require('../config/db')
const bcrypt = require("bcrypt");

const { Schema } = mongoose

 

const userSchema = new Schema({
    userID: { type:String, required: true },
    userName: { type:String, required: true },
    userPhone: { type:String, lowercase: true, required: true },
    userEmail: { type:String, lowercase: true, required: true },
    userPassword: { type:String, required: true },
    location: { type:String, required: true },
    latitude: { type:String, lowercase: true, required: true },
    longitude: { type:String, lowercase: true, required: true },
});

userSchema.pre('save', async function() {
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashPass = await bcrypt.hash(user.userPassword,salt);

        //Password Encryption
        user.userPassword = hashPass;
        //Password Encryption
    } catch (error) {
        
    }
})

const UserModel = db.model('Users', userSchema);

module.exports = UserModel