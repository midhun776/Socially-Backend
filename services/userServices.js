const UserModel = require("../model/userModel")

class UserService{
    static async registerUser(
        userID, userName, userPhone,
        userEmail, userPassword,
        location, latitude, longitude){
            try {
                const createUser = new UserModel({
                    userID, userName, userPhone,
                    userEmail, userPassword,
                    location, latitude, longitude
                });
                return await createUser.save();
            } catch (error) {
                throw error;
            }
        }
}

module.exports = UserService