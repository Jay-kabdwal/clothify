const express = require('express');
const {registerUser, LoginUser, logoutUser, authMiddleware} = require('../../controllers/auth-controller/auth-controller');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', LoginUser);
router.post('/logout', logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: "Authenticated user",
        user,
    });
});


module.exports = router;