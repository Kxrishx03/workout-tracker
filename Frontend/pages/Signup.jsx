import { useState } from "react";
import { useSignup } from "../hooks/Usesignup"

export function Signup(){

     const [username,setUsername] = useState('');
     const [Password,setPassword] = useState('');
     const { signup, isLoading , error} = useSignup ();

      async function OnSubmitHandler(e){
            e.preventDefault();
            await signup(username,Password);
      }

    return(  
    <form className="signup"  onSubmit={OnSubmitHandler}>
       <h4>SIGNUP HERE!</h4>
    
    <input type="text" placeholder="Username" value={username} onChange={(e)=>{
     setUsername(e.target.value)
    }}></input>

    <input type="text" placeholder="Password" value={Password} onChange={(e)=>{
     setPassword(e.target.value)
    }}></input>

    <button disabled={isLoading}>Signup</button>
    {error && <div className="error">{error}</div>}
   
 </form>
);
}