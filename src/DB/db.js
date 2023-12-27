import mongoose from "mongoose";

 mongoose.connect('mongodb://localhost:27017/empform')
.then(()=>{
    console.log("mongoDB connected");
})
.catch((error)=>{
    console.log(`Error : ${error}`);
})

