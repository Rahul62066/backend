const mongoose = require('mongoose');
const connectDB = async()=>{
   try{
    await mongoose.connect('mongodb+srv://lavkushraj1155:lavkushraj1155@cluster0.s15ug7f.mongodb.net/?retryWrites=true&w=majority');
    console.log('conected to Mongodb');
   }
   
   catch(error){
    console.log(error);
   }
}
module.exports = connectDB;