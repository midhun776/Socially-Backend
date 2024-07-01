var express=require('express');
var bodyParser = require('body-parser');
const UserRouter = require("./routers/userRouter");
var app = express();

app.use(bodyParser.json());

app.use('/', UserRouter);

module.exports = app;