var express=require('express');
var bodyParser = require('body-parser');
const UserRouter = require("./routers/userRouter");
const CommunityRouter = require("./routers/communityRouter");
const PostRouter=require("./routers/postRouter")
var app = express();

app.use(bodyParser.json());

app.use('/', UserRouter);
app.use('/community', CommunityRouter);
app.use('/post',PostRouter)

module.exports = app;