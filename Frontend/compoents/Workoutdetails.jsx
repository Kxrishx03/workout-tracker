import { Useworkoutcontext } from "../hooks/Useworkoutcontext";
import { UseAuthContext } from "../hooks/Useauthcontext";

export function Workoutdetails({title,load,reps,createdAt,id}){

    const { dispatch } = Useworkoutcontext();
    const { user } = UseAuthContext();

    async function onClickHandler(){

        if(!user){
            return;
        }
        const response = await fetch('http://localhost:3000/workouts/' + id,{
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
              }
        });
        const json = await response.json();
        if(response.ok){
            dispatch({type:'DELETE_WORKOUT',payload:json});
        }
    }
    return (
       <div className="workout-details">
        <h4>{title}</h4>
        <p><b>Loads(KG): </b>{load}</p>
        <p><b>Reps: </b> {reps}</p>
        <p>{createdAt}</p>
        <span onClick={onClickHandler}>Delete</span>
       </div>
    );
}