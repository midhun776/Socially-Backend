const router = require("express").Router();
const PostController = require("../controller/postController");

router.post("/addPost", PostController.addPost);
router.get("/getPost", PostController.fetchAllPost);

module.exports = router;