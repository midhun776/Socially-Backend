const router = require("express").Router();
const CommunityController = require("../controller/communityController");

router.post("/add", CommunityController.addCommunity);
router.get("/get", CommunityController.getCommunities);

module.exports = router;