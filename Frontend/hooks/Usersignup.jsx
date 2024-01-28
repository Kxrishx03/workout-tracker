import { useContext, useState } from "react";
import { Userauthcontext } from "./Userauthcontext";

export const userSignup = () => {
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const { dispatch } = Userauthcontext();

    const signup = async (username,password) =>{
        setIsLoading(true);
        setError(null);            

        const response = await fetch('http://localhost:3000/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(username,password),
           
        });

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json));
            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);
        }
    }

    return { signup, isLoading , error};
}