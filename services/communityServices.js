const CommunityModel = require("../model/communityModel");


class CommunityService {
    static async addCommunity(
        communityName, communityCreator, members,
        tagline, rating, about){
            try {
                const community = new CommunityModel({
                    communityName, communityCreator, 
                    members, tagline, rating, about
                });

                return await community.save();
            } catch (error) {
                throw error;
            }
        }

    static async getCommunities(){
            try {
                const allCommunities = await CommunityModel.find({});
                return allCommunities;
            } catch (error) {
                throw error;
            }
        }
}

module.exports = CommunityService;