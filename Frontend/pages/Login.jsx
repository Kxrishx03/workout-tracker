import { useState } from "react";

export function Login(){

     const [username,setUsername] = useState('');
     const [Password,setPassword] = useState('');

     
     async function OnSubmitHandler(e){
        e.preventDefault();
        console.log(username,Password);
  }
     
    return(  
    <form className="login"  onSubmit={OnSubmitHandler}>
       <h4>LOGIN HERE!</h4>
   
    <input type="text" placeholder="Username" value={username} onChange={(e)=>{
     setUsername(e.target.value)
    }}></input>

 
    <input type="text" placeholder="Password" value={Password} onChange={(e)=>{
     setPassword(e.target.value)
    }}></input>

    <button>Login</button>
   
 </form>
);
}