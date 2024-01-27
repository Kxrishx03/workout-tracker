export function Workoutdetails({title,load,reps,createdAt}){
    return (
       <div className="workout-details">
        <h4>{title}</h4>
        <p><b>Loads(KG): </b>{load}</p>
        <p><b>Reps: </b> {reps}</p>
        <p>{createdAt}</p>
       </div>
    );
}