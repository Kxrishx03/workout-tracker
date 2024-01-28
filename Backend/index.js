const express = require('express');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
var cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(
    cors({
    origin:['http://localhost:5173/Signup','http://localhost:5173','http://localhost:5173/login']

}));


app.use((req,res,next)=>{
   console.log("CHECK");
   next();
});

app.use('/workouts',workoutRoutes);
app.use('/user',userRoutes);

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

