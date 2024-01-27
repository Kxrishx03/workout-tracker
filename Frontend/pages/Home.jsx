import { useState,useEffect } from "react";
import { Workoutdetails } from "../compoents/Workoutdetails";
import { Workoutform } from "../compoents/Workoutform";

export function Home(){
    const [workouts,setworkouts] =  useState(null);
    useEffect(() => {
      fetch('http://localhost:3000/workouts').then(async function(res){
      const json = await res.json();
      setworkouts(json.workouts);
    })
  }, []); 

  console.log(workouts);
   
  return (
    <div className="Home">
      <div className="workouts">
       { workouts && workouts.map((w) => (
         <Workoutdetails key={w._id} title={w.title} load={w.load} reps={w.reps} createdAt={w.createdAt}/>
    ))}
      </div>
    <Workoutform />
    </div>
  );

}