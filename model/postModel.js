const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const postSchema = new Schema({
    userId: { type: String, required: true },
    caption: { type: String, required: true },
    image: { type: String, required: true },
    likes: { type: Array, default: [], ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

const postModel = db.model('Posts', postSchema);

module.exports = postModel;