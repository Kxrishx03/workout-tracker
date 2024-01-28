const { User } = require('../modules/Usermodules');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'5d'});
}

 const loginUser = async (req,res) =>{

    const {username,password} = req.body;

    try{
        const user = await User.login(username,password);
        const token = createToken(user._id);
        res.status(200).json({username,token});

    }catch(Error){

          res.status(400).json({error: Error.message});
    }
   
}

 const signupUser = async  (req,res) =>{

    const { username , password } = req.body;
    try{
        const user = await User.signup(username,password);
        const token = createToken(user._id);
        res.status(200).json({username,token});

    }catch(Error){

          res.status(400).json({error: Error.message});
    }
   
}


module.exports = {
    loginUser,
    signupUser   
}