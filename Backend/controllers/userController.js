const { User } = require('../modules/Usermodules');

 const loginUser = async (req,res) =>{
    res.status(200).json({msg:"Login user"});
}

 const signupUser = async  (req,res) =>{

    const { username , password } = req.body;
    try{
        const user = await User.signup(username,password);
        res.status(200).json({username,user});

    }catch(error){
          res.status(400).json({messsage:error.messsage});
    }
   
}


module.exports = {
    loginUser,
    signupUser   
}