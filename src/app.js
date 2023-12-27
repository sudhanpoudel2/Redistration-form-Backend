// console.log("Jay shree Ram");

import express from "express";
import './DB/db.js'


import path from 'express';
const app = express();

// const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// app.get('/' ,(req,res) =>{
//     res.send  ("Hello World! I am broken")
// })

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listning to the port ${process.env.PORT || 3000}`);
})