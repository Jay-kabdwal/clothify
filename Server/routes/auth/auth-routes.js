const express = require('express');
const {registerUser, LoginUser} = require('../../controllers/auth-controller/auth-controller');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', LoginUser);

module.exports = router;