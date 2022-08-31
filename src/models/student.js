const mongoose =require("mongoose");
const validater=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:  3 
       },
    email:{
        type:String,
        required:true,
        unique:[true, "email already present"],
     },
   number:
   {
    type:Number,

    required:true,
    unique:true

   },
   address:{
   type:String,
   required:true
   }

   });
   const Student=mongoose.model('Student',studentSchema);
   module.exports=Student;