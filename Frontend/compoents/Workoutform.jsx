import { useState } from "react";
import { Useworkoutcontext } from "../hooks/Useworkoutcontext";

export function Workoutform(){

    const {dispatch} = Useworkoutcontext();

    const [title,setTitle]=useState("");
    const [load,setload]=useState("");
    const [reps,setreps]=useState("");
    const [error,seterror]=useState(null);

    async function submitHandler(e){
        e.preventDefault();
        const workout = {title,load,reps};
        const response = await fetch('http://localhost:3000/workouts',{
             method:"POST",
             body:JSON.stringify(workout),
             headers:{
                'Content-type':'application/json'
             }
        })

        const json = response.json();
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

           <label typeof="text"> Exercise Load(in KG)</label>
           <input type="number" placeholder="Load" value={load} onChange={(e)=>{
            setload(e.target.value)
           }}></input>

           <label typeof="text"> Number of Reps</label>
           <input type="number" placeholder="Reps" value={reps} onChange={(e)=>{
            setreps(e.target.value)
           }}></input>
           <button>Add Workout</button>
          

        </form>

        </div>
    );
}