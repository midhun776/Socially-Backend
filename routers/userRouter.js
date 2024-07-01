const router = require("express").Router();
const UserController = require('../controller/userController'); 

router.post('/registerUser', UserController.registerUser);

module.exports = router;