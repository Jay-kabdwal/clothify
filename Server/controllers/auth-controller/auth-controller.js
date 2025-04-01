const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


// 1:51:53
//register

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const hashPassword = await bcrypt.hash(password, 12);

        const newuser = new User({
            username,
            email,
            password: hashPassword,
        });
        await newuser.save();
        res.status(200).json({success: true, message: "user created successfully"});


    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "some error occured"
        });

    }
}


//login

const Login = async (req, res) => {
    const { username, email, password } = req.body;
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "some error occured"
        });

    }
}


//logout



module.exports ={registerUser};