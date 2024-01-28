import { useState } from "react";

export function Signup(){

     const [username,setUsername] = useState('');
     const [Password,setPassword] = useState('');

      async function OnSubmitHandler(e){
            e.preventDefault();
            console.log(username,Password);
      }

    return(  
    <form className="signup"  onSubmit={OnSubmitHandler}>
       <h4>SIGNUP HERE!</h4>
    <label typeof="text"> Username</label>
    <input type="text" placeholder="Username" value={username} onChange={(e)=>{
     setUsername(e.target.value)
    }}></input>

    <label typeof="text">Password</label>
    <input type="text" placeholder="Password" value={Password} onChange={(e)=>{
     setPassword(e.target.value)
    }}></input>

    <button>Signup</button>
   
 </form>
);
}