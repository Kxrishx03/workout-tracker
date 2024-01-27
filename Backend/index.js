const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

//Routes

app.get('/workouts',(req,res)=>{

});


app.post('/workouts',(req,res)=>{

});

app.get('/workouts/:id',(req,res)=>{

});


app.delete('/workouts/:id',(req,res)=>{

});

app.patch('/workouts/:id',(req,res)=>{

});



app.listen(PORT,()=>{
    console.log("Running on : " + PORT);
})
