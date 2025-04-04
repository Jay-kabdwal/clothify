const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


//register

const registerUser = async (req, res) => {

    const { username, email, password } = req.body;

    try {

        const checkUser = await User.findOne({ email });
        if (checkUser) {
            res.send({
                success: false,
                message: "user already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const newuser = new User({
            username,
            email,
            password: hashPassword,
        });

        await newuser.save();

        res.status(200).json({
            success: true,
            message: "user created successfully"
        });


    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "some error occured"
        });

    }
}

//login

const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    try {

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            res.send({
                success: false,
                message: "user not found"
            })
        }
        const checkPassword = await bcrypt.compare(password, checkUser.password);
        if (!checkPassword) {
            res.send({
                success: false,
                message: "incorrect password"
            })
        }
        const token = jwt.sign({
            id: checkUser._id,
            email: checkUser.email,
            username: checkUser.username,
        }, "secretekey", {
            expiresIn: "1h"
        });

        res.cookie("token",token,{
            httponly:true,
            secure:false,
        }).json({
            success:true,
            message:"login successfully",
            user:{
                id:checkUser._id,
                username:checkUser.username,
                email:checkUser.email,
            }
        })


    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "some error occured"
        });

    }
}

//logout



module.exports = { registerUser , LoginUser };

