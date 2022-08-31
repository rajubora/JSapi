const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/students-api").
then(()=>{
console.log("connection establised succesfully");

}).catch((e)=>{
    console.log("connection not established");
});