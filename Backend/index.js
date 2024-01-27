const express = require('express');
const workoutRoutes = require('./routes/workouts');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());


app.use((req,res,next)=>{
   console.log("CHECK");
   next();
});

app.use('/workouts',workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connection succesfull");
    app.listen(PORT,()=>{
        console.log("Running on : " + PORT);
    })
})
.catch((e)=>{
    console.log("Error occurred: " + e);
})

