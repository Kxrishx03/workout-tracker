
 const loginUser = async = (req,res) =>{
    res.status(200).json({msg:"Login user"});
}

 const signupUser = async = (req,res) =>{
    res.status(200).json({msg:"Sign up user"});
}


module.exports = {
    loginUser,
    signupUser   
}