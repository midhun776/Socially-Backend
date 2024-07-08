const UserModel = require("../model/userModel")

class UserService{
    static async registerUser(
        userID, userName, userPhone, userProfilePic,
        userEmail, userPassword, posts, connections, chats,
        location, latitude, longitude){
            try {
                const createUser = new UserModel({
                    userID, userName, userPhone, userProfilePic,
                    userEmail, userPassword, posts, connections, chats,
                    location, latitude, longitude
                });
                return await createUser.save();
            } catch (error) {
                throw error;
            }
        }

    static async getUsers(){
            try {
                const allUsers = await UserModel.find({});
                return allUsers;
            } catch (error) {
                throw error;
            }
        }

    static async forgetUser(email){
            try {
                const userFound = await UserModel.findOne({userEmail: email});
                return userFound;
            } catch (error) {
                throw error;
            }
        }

    static async findUser(userId){
            try {
                const userFound = await UserModel.findOne({userID: userId});
                return userFound;
            } catch (error) {
                throw error;
            }
        }    
}

module.exports = UserService;