const postService=require('../services/postServices');
const UserService = require('../services/userServices');

exports.addPost=async(req,res)=>{
    try{
    const {userId,caption,image,likes}=req.body;
    
    const successRes=postService.addPost(userId,caption,image,likes);

    res.json({status:true,success:"post added successfully"})
    
    }
    catch(err){
        throw err;
    }
}
exports.fetchAllPost=async(req,res,next)=>{
    try{
        let allPost=await postService.fetchAllPost();
        res.json({status:true,data:allPost})
    }
    catch(err){
        throw err;
    }
}

exports.getUserPosts = async(req,res,next)=>{
    try{
        const {userId} = req.body
        let userPosts = await postService.getUserPosts(userId);
        res.json({status:true, data:userPosts})
    }
    catch(err){
        throw err;
    }
}