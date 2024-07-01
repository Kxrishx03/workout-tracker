const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});


//signup static method
userSchema.statics.signup = async function(username,password){

    //validation
     
   if(!username || !password){
    throw Error("All fields must be filled");
   } 

   if(!validator.isEmail(username)){
    throw Error("Invalid username");
   }

   if(!validator.isStrongPassword(password)){
    throw Error("Weak Password");
   }

    const exists = await this.findOne({username});
    if(exists){
        throw Error("Username already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    
    const user = await this.create({username,password:hash});

    return user;

}


//login  static method

userSchema.statics.login = async function(username,password){

    //validation 
   if(!username || !password){
    throw Error("All fields must be filled");
   } 

    const user = await this.findOne({username});
    if(!user){

        throw Error("Invalid username");

    }

    const match = await bcrypt.compare(password,user.password);

    if(!match){
        throw Error("Wrong Password");
    }
    
    return user;

}

const User = mongoose.model('User',userSchema);

module.exports={ User };