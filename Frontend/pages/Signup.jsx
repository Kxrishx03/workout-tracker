import { useState } from "react";
import { userSignup } from "../hooks/Usersignup"

export function Signup(){

     const [username,setUsername] = useState('');
     const [Password,setPassword] = useState('');
     const { signup, isLoading , error} = userSignup();

      async function OnSubmitHandler(e){
            e.preventDefault();
            await signup(username,Password);
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

    <button disabled={isLoading}>Signup</button>
    {error && <div className="error">{error.message}</div>}
   
 </form>
);
}