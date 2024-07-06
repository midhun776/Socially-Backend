const UserService = require("../services/userServices");

exports.registerUser = async(req, res, next) => {
    try {
        const { userID, userName, userProfilePic, userPhone,
            userEmail, userPassword, posts, connections, chats,
            location, latitude, longitude} = req.body;

        const successRes = UserService.registerUser(
            userID, userName, userProfilePic, userPhone,
            userEmail, userPassword, posts, connections, chats,
            location, latitude, longitude);
        
        res.json({status: true, success:"User Registered Successfully!"});
    } catch (error) {
        throw error
    }
}

exports.getUsers = async(req, res, next) => {
    try {
        let allUsers = await UserService.getUsers();
        res.json({status: true, data: allUsers});
    } catch (error) {
        throw error
    }
}

exports.forgetUser = async(req, res, next) => {
    try {
        const {email} = req.body
        let resultUserFound = await UserService.forgetUser(email);
        res.json({status: true, data: resultUserFound});
    } catch (error) {
        throw error
    }
}

exports.findUser = async(req, res, next) => {
    try {
        const {userId} = req.body
        let resultUserFound = await UserService.findUser(userId);
        res.json({status: true, data: resultUserFound});
    } catch (error) {
        throw error
    }
}