const CommunityService = require("../services/communityServices")

exports.addCommunity = async (req,res) => {
    try {
        const {communityName, communityCreator, members,
            tagline, rating, about} = req.body;

        const successRes = CommunityService.addCommunity(
            communityName, communityCreator, members,
            tagline, rating, about
        )

        res.json({status: true, success: "Community Added"})
    } catch (error) {
        throw error;
    }
}

exports.getCommunities = async (req,res) => {
    try {
        let allCommunities = await CommunityService.getCommunities();
        res.json({status: true, data: allCommunities})
    } catch (error) {
        throw error;
    }
}