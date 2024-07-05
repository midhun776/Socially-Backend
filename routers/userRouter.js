const router = require("express").Router();
const UserController = require('../controller/userController'); 

router.post('/registerUser', UserController.registerUser);
router.get('/getUsers', UserController.getUsers);
router.get('/forgetUser', UserController.forgetUser);
router.get('/findUser', UserController.findUser);

module.exports = router;