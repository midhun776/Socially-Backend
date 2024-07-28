const postModel = require("../model/postModel");
const UserModel = require("../model/userModel");

class postService {

    static async addPost(userId, caption, image, likes) {
        try {
            const addPosts = new postModel({ userId, caption, image, likes });
            return await addPosts.save();

        }
        catch (err) {
            throw err;
        }

    }
    static async fetchAllPost() {
        try {
            const allPost = await postModel.find()
                .populate(
                    'userId', 'userName userProfilePic'
                )
                .sort({ createdAt: -1 });
            return allPost;
        }
        catch (err) {
            throw new Error("unable to retrieve post");
        }
    }

    static async getUserPosts(userIds) {
        try {

            var postsTemp = [];
            var usersPostsLength = [];
            console.log(userIds);

            for (let i = 0; i < userIds.length; i++) {
                var tempPosts = await postModel.find({ userId: userIds[i] }).select('userId caption image likes createdAt');
                for (let j = 0; j < tempPosts.length; j++) {
                    postsTemp.push(tempPosts[j]);
                }
                console.log(tempPosts.length);
                usersPostsLength.push(tempPosts.length)
            }
            console.log(postsTemp);

            let userPosts = [{}];
            let n = 0

            for (var i = 0; i < postsTemp.length; i++) {
                userPosts[i] = {};
            }


            for (let i = 0; i < postsTemp.length; i++) {
                // console.log(i);
                userPosts[i].userId = postsTemp[i].userId;
                userPosts[i].caption = postsTemp[i].caption;
                userPosts[i].image = postsTemp[i].image;
                userPosts[i].likes = postsTemp[i].likes;
                userPosts[i].createdAt = postsTemp[i].createdAt;
                //console.log(userPosts);
            }
            console.log("Total", userPosts.length, "Next", usersPostsLength);

            if (!userPosts) {
                throw new Error('No posts found');
            }

            for (let m = 0; m < usersPostsLength.length; m++) {
                var userDetails = await UserModel.findOne({ userID: userIds[m] }).select('userID userName userProfilePic');
                console.log(userDetails.userName);
                console.log(userDetails);
                for (let p = 0; p < usersPostsLength[m]; p++) {
                    console.log(n);
                    userPosts[n].userID = userDetails.userID;
                    userPosts[n].userName = userDetails.userName;
                    userPosts[n].userProfilePic = userDetails.userProfilePic;
                    n++;
                }
            }

            // Find user details of the post Owner
            // var userDetails = await UserModel.findOne({ userID: userIds[0] }).select('userName userProfilePic'); // Replace with the specific fields you need

            // // Optionally, you can add the posts to the user object
            // console.log(userDetails.userName);
            // console.log(userDetails.userProfilePic);
            // //console.log(userPosts);

            // for (let i = 0; i < userPosts.length; i++) {
            //     userPosts[i].userName = userDetails.userName;
            //     userPosts[i].userProfilePic = userDetails.userProfilePic; // Replace 'newField' and 'newValue' with your desired key and value
            //     //console.log(`Post ${i + 1}:`, userPosts[i]); // Print each post to the console
            // }

            userPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            return userPosts;
        } catch (err) {
            throw new Error(err);
        }
    }
}



module.exports = postService;

