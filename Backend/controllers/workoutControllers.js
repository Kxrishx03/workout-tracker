const Workout = require('../modules/Workoutmodules');
const mongoose = require('mongoose');

//Get  all workout
const getAllWorkouts = async (req,res) =>{
    const user_id = req.user._id;
    const workouts = await Workout.find({user_id}).sort({createdAt:-1});
    res.status(200).json({workouts:workouts});
}

//Get workout by id
const getWorkout = async (req,res)=>{

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Invalid ID"})
    }
    const workout = await Workout.findById(id);

    if(!workout){
       return res.status(403).json({message:"Workout not found!"})
    }

    res.status(200).json(workout);
}

//Add a new workout
const createWorkout =  async (req,res)=>{
    const {title,load,reps} = req.body;

    try{
        const user_id = req.user._id;
         const workout = await Workout.create({title,load,reps,user_id});
         res.status(200).json({message:"Workout added to list",workout:workout});

    }catch(e){
           
        res.status(400).json({message:"Error ouccurred",error:e.message});
    }
 }

 //delete workout
 const deleteWorkout = async (req,res)=>{

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Invalid ID"})
    }

    const workout = await Workout.findByIdAndDelete(id);

    if(!workout){
        return res.status(403).json({message:"Workout not found!"})
     }
 
     res.status(200).json({workout});

 }


 //update workout

 const updateWorkout = async (req,res)=>{

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Invalid ID"})
    }

    const workout = await Workout.findByIdAndUpdate(id,{...req.body});

    if(!workout){
        return res.status(403).json({message:"Workout not found!"})
     }
 
     res.status(200).json({message:"Updated",workout:workout});

 }

 module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
 }