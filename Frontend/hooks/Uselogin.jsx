import { useState } from "react";
import { UseAuthContext  } from "./Useauthcontext";

export const useLogin = () => {
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const { dispatch } = UseAuthContext ();

    const login = async (username,password) =>{
        setIsLoading(true);
        setError(null);            

        const response = await fetch('https://workout-tracker-apbs.vercel.app/user/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username,password}),
            mode:'cors'
           
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

    return { login , isLoading , error};
}