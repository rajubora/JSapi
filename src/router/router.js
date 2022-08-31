const express = require('express');
const router = new express.Router();

const Student=require("../models/student");

router.post('/students',async(req,res)=>{

    try{ 
        const user=new Student(req.body);
        const createuser= await user.save();
        res.status(201).send(createuser);
    }
    catch(e){
        res.status(400).send(e);
    }
       
    
    });
    router.get('/students', async(req,res)=>{
        try{
           const studentdata=await  Student.find();
           res.send(studentdata);
        }
        catch(e){
                  res.send(e);
        }
    });
    
    router.get('/students/:id', async(req,res)=>{
        try{
           const _id=req.params.id;
          const studentsdata= await Student.findById(_id);
          if(!studentsdata){
              res.status(400).send();
          }
          res.status(201).send(studentsdata);
        }
        catch(e){
                  res.status(500).send(e);
        }
    });
    router.patch('/students/:name',async(req,res)=>{
        try{
             const updatestudent= await  Student.findOneAndUpdate({name:req.params.name}, req.body ,{
                     new:true});
         res.send(updatestudent);
    
              }
              catch(e)
              {
                  res.status(400).send(e);
              }
    });
    module.exports=router;