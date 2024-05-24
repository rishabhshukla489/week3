const express =require('express');

const app=express();

app.use(express.json());

app.post("/health-checkup",(req,res)=>{
    const kidneys =req.body.kidneys;
    const kidneylength=kidneys.length;
    res.send("length of kidney is "+kidneylength);

});

app.listen(3000);