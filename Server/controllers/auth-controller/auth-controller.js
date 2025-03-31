

//register

const register = async(req,res) => {
    const {username , email ,password} = req.body;
    
    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : "some error occured"
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



