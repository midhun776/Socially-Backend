const postModel=require('../model/postModel');
class postService{

    static async addPost(userId,caption,image){
        try{
            const addPosts=new postModel({userId,caption,image});
            return await addPosts.save();

        }
        catch(err){
            throw err;
        }

    }
    // static async getAllPost(userId,caption,image,createdAt)

}
module.exports=postService;