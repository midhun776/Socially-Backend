var express=require('express');
var bodyParser = require('body-parser');
const UserRouter = require("./routers/userRouter");
const CommunityRouter = require("./routers/communityRouter");
var app = express();

app.use(bodyParser.json());

app.use('/', UserRouter);
app.use('/community', CommunityRouter);

module.exports = app;