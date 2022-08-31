const express = require('express');
const app = express();
const router=require('./router/router');
require("./db/conn");
const Student=require("./models/student");

app.use(express.json());
app.use(router);

const port=process.env.PORT || 3000;
//implementation using promise 

/* app.post('/students', (req, res)=> {
    console.log(req.body);
    const user=new Student(req.body);
user.save().then(()=>
{
    res.status(201).send(user);
}).catch((err)=>
{
    res.status(400).send(err);
});
}); 
*/

// implementationn using async await

app.listen(port,()=>{
    console.log(`app listening on port number ${port}`);
});