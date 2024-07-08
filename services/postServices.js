const postModel=require('../model/postModel');

class postService{
    
    static async addPost(userId,caption,image,likes){
        try{
            const addPosts=new postModel({userId,caption,image,likes});
            return await addPosts.save();

        }
        catch(err){
            throw err;
        }

    }
    static async fetchAllPost(){
        try{
            const  allPost=await postModel.find()
            .populate(
                'userId','userName userProfilePic' 
            )
            .sort({createdAt:-1});
            return allPost;
        }
        catch(err){
            throw new Error("unable to retrieve post");
        }
    }
    }
   


module.exports=postService;