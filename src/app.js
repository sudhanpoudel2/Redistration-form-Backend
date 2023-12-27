// console.log("Jay shree Ram");

import express from "express";
import './DB/db.js'
import path from 'path';
// import exphbs from 'express-handlebars';

// const template_path = path.join(__dirname , '../template/src')

const template_path = path.join(new URL('.', import.meta.url).pathname, "../template/views");
const app = express();

// app.engine('handlebars', exphbs());
app.set('view engine','handlebars');
app.set('views',template_path)

// app.get('/' ,(req,res) =>{
//     res.send  ("Hello World! I am broken")
// })

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listning to the port ${process.env.PORT || 3000}`);
})