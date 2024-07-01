const router = require("express").Router();
const UserController = require('../controller/userController'); 

router.post('/registerUser', UserController.registerUser);
router.get('/getUsers', UserController.getUsers);

module.exports = router;