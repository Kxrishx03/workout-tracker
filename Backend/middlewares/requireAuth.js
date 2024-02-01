const jwt = require('jsonwebtoken');
const { User } = require('../modules/Usermodules');

const requireAuth = async (req,res,next)=>{

    const { authorization } = req.headers;
   
   
    if(!authorization){
        return res.status(401).json({message:"Authorization  token required for access."});
    }
    const token = authorization.split(' ')[1];
   
   
    try{
          const {_id} =  jwt.verify(token,process.env.SECRET);
          
          req.user = await User.findOne({_id}).select('_id');
          next();

    }catch(error){

          console.log(error);
          res.status(401).json({msg:"Request not valid"});
    }

}

module.exports = { requireAuth }