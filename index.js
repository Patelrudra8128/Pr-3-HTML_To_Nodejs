const express = require('express');
const path = require('path');
const port = 2000;
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/index2',(req,res)=>{
    res.render('index2');
})

app.get('/index3',(req,res)=>{
    res.render('index3');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('/charts',(req,res)=>{
    res.render('charts');
})

app.get('/projects',(req,res)=>{
    res.render('projects');
})

app.listen(port,(err)=>{
    if(err){
        console.log("Server is not ready");
        return false;
    }
    console.log("Server is running on port : "+port);
})