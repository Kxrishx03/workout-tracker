const express = require('express');
const router  =  express.Router();

//GETS ALL THE WORKOUTS
router.get('/',(req,res)=>{
    res.json({msg:"GET WORKOUTS"})
});

//GET SINGLE WORKOUT
router.get('/:id',(req,res)=>{
    res.json({msg:"Workout"})
});

//POST A NEW WORKOUT
router.post('/',(req,res)=>{
    res.json({msg:"Workout added"});
});

router.delete('/:id',(req,res)=>{
    res.json({msg:"Workout deleted"});
});

router.patch('/:id',(req,res)=>{
    res.json({msg:"Workout updated"});
});

module.exports = router;