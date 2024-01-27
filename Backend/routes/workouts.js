const express = require('express');
const router  =  express.Router();
const { 
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutControllers')

//GETS ALL THE WORKOUTS
router.get('/',getAllWorkouts);

//GET SINGLE WORKOUT
router.get('/:id',getWorkout);

//POST A NEW WORKOUT
router.post('/',createWorkout);

router.delete('/:id',deleteWorkout);

router.patch('/:id',updateWorkout);

module.exports = router;