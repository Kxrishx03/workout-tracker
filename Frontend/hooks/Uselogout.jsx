import { UseAuthContext } from "./Useauthcontext";
import { Useworkoutcontext } from "./Useworkoutcontext";

export const UseLogout=()=>{
         
    const { dispatch } = UseAuthContext();
    const { dispatch:workoutDispatch} = Useworkoutcontext();

    const logout = () =>{
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});
        workoutDispatch({type:'SET_WORKOUTS',payload:null});
    }

    return {logout}
}