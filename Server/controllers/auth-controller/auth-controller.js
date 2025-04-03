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

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const checkUser = await User.findOne({ email });
        if(!checkUser){
            res.send({
                success:false,
                message:"use"
            })
        }
        const checkPassword = await bcrypt.compare(password, checkUser.password);
        


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

