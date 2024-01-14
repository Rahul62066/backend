const express = require("express");
const app= express();


const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/Users');
const cors = require('cors');

// Middleware for parsing JSON
app.use(express.json());

// Enable cors
app.use(cors());
connectDB();
//Registration

app.post('/register',async(req,res)=>{
    
    try{
        
        const {name,username,password} = req.body;
        
        console.log(req.body);
        const user = new User({name,username,password});
        console.log(user);
        await user.save();
        console.log('Rahul');
        
        res.status(201).json({message:'Registration Success'});
    }
    catch(error){
    res.status(500).json({error: 'Registration failed'});
    }
});

// Login
app.post('/Login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).json({message: 'Invalid username or password'});
        }
        if(user.password!=password){
            return res.status(404).json({message: 'Invalid password'});
        }
        res.status(200).json({message:'Login Succesfully'});
    }
    catch(error){
        res.status(500).json({error:'Login Failed'});
    }
})


app.listen(port,()=>{
    console.log("Server is listening in port 8000")
});