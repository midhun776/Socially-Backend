const UserService = require("../services/userServices");

exports.registerUser = async(req, res, next) => {
    try {
        const { userID, userName, userPhone,
            userEmail, userPassword,
            location, latitude, longitude} = req.body;

        const successRes = UserService.registerUser(
            userID, userName, userPhone,
            userEmail, userPassword,
            location, latitude, longitude);
        
        res.json({status: true, success:"User Registered Successfully!"});
    } catch (error) {
        throw error
    }
}