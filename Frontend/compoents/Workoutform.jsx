import { useState } from "react";
import { Useworkoutcontext } from "../hooks/Useworkoutcontext";
import { UseAuthContext } from "../hooks/Useauthcontext";

export function Workoutform(){

    const {dispatch} = Useworkoutcontext();

    const [title,setTitle]=useState("");
    const [load,setload]=useState("");
    const [reps,setreps]=useState("");
    const [error,seterror]=useState(null);
    const { user } = UseAuthContext();

    async function submitHandler(e){
        e.preventDefault();
        if(!user){
            seterror("You must login!");
            return;
        }
        const workout = {title,load,reps};
        const response = await fetch('https://workout-tracker-apbs.vercel.app/workouts',{
             method:"POST",
             body:JSON.stringify(workout),
             headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer ${user.token}`
             }
        })

        const json = await response.json();
        if(!response.ok){
             seterror(json.error);
        }
        if(response.ok){
            setTitle('');
            setload('');
            setreps('');
            seterror(null);
            console.log("New workout added");
            dispatch({type:'CREATE_WORKOUT',payload:json});
        }
    }

    return(
        <div className="create">
        <h3>Add new Workout!!</h3>
        <form className="add"  onSubmit={submitHandler}>

           <label typeof="text"> Exercise Title</label>
           <input type="text" placeholder="Title" value={title} onChange={(e)=>{
            setTitle(e.target.value)
           }}></input>

           <label typeof="text">Load(in KG)</label>
           <input type="number" placeholder="Load" value={load} onChange={(e)=>{
            setload(e.target.value)
           }}></input>

           <label typeof="text">Reps</label>
           <input type="number" placeholder="Reps" value={reps} onChange={(e)=>{
            setreps(e.target.value)
           }}></input>
           <button>Add Workout</button>
           {error && <div className="error">{error}</div>}
          

        </form>

        </div>
    );
}