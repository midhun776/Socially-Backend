const postModel = require("../model/postModel");
const UserModel = require("../model/userModel");

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
    
    static async getUserPosts(userId) {
        try {
            var postsTemp = await postModel.find({ userId: userId }).select('userId caption image likes createdAt');
            console.log(postsTemp.length);
    
            let userPosts= [{}];

            for (var i = 0; i < postsTemp.length; i++) {
                userPosts[i] = {};
            }

        
            for (let i = 0; i < postsTemp.length; i++) {
                console.log(i);
                userPosts[i].userId = postsTemp[i].userId;
                userPosts[i].caption = postsTemp[i].caption;
                userPosts[i].image = postsTemp[i].image;
                userPosts[i].likes = postsTemp[i].likes;
                userPosts[i].createdAt = postsTemp[i].createdAt;
                console.log(userPosts);
            }

            if (!userPosts) {
                throw new Error('No posts found');
            }

            // Find user details of the post Owner
            var userDetails = await UserModel.findOne({ userID: userId }).select('userName userProfilePic'); // Replace with the specific fields you need

            // Optionally, you can add the posts to the user object
            console.log(userDetails.userName);
            console.log(userDetails.userProfilePic);
            console.log(userPosts);

            for (let i = 0; i < userPosts.length; i++) {
                userPosts[i].userName = userDetails.userName;
                userPosts[i].userProfilePic = userDetails.userProfilePic; // Replace 'newField' and 'newValue' with your desired key and value
                console.log(`Post ${i + 1}:`, userPosts[i]); // Print each post to the console
            }

            console.log(userPosts);

            return userPosts;
        } catch (err) {
            throw new Error(err);
        }
    }
}
   


module.exports=postService;