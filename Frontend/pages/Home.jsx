import { useEffect } from "react";
import { Useworkoutcontext } from "../hooks/Useworkoutcontext";
import { Workoutdetails } from "../compoents/Workoutdetails";
import { Workoutform } from "../compoents/Workoutform";

export function Home(){

  const {workouts,dispatch} = Useworkoutcontext();
    
    useEffect(() => {
      fetch('http://localhost:3000/workouts').then(async function(res){
      const json = await res.json();
      const payload = json.workouts;
      
      if(res.ok){
        dispatch({type:'SET_WORKOUTS',payload:payload})
      }
    })
  }, [dispatch]); 

 
   
  return (
    <div className="Home">
      <div className="workouts">
       { workouts && workouts.map((w) => (
         <Workoutdetails key={w._id} title={w.title} load={w.load} reps={w.reps} createdAt={w.createdAt} id={w._id}/>
    ))}
      </div>
    <Workoutform />
    </div>
  );

}