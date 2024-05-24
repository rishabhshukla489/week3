const express =require('express');
const app=express();

app.get("/health-checkup",(req,res)=>{
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyid=req.query.kidneyid;
    if(!(username==="harkirat" && password === "pass")){
       res.status(400).json({"msg":"Something up with inputs"})
       return
    }
    if(kidneyid !=1 && kidneyid != 2){
            res.status(400).json({"msg":"kidney wrong"})
            return
    }
    res.json({
        msg: "your kidney is fine"
    })
})

app.listen(3000)