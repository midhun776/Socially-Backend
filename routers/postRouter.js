const router = require("express").Router();
const PostController = require("../controller/postController");

router.post("/addPost", PostController.addPost);
router.get("/getAllPost", PostController.fetchAllPost);

router.get("/getUserPosts", PostController.getUserPosts);

module.exports = router;