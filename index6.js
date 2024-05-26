const express= require('express')
const app=express()

function isOld(age){
if(age>=14){
    return true;
}else{
    return false;
}
}

function isoldmiddleware(req,res,next){
    if(age>=14){
        next();
    }else{
        next();
    }
}

app.get("/ride1",(req,res)=>{
    if(isOld(req.query.age)){
        res.json({
            msg:"enjoy ride1"
        })
    }else{
        res.status(411).json({
            msg:"Sorry you are of not age yet"
        })
    }
   
})
app.get("/ride2",(req,res)=>{
    if(isOld(req.query.age)){
        res.json({
            msg:"enjoy ride1"
        })
    }else{
        res.status(411).json({
            msg:"Sorry you are of not age yet"
        })
    }
   
})
app.listen(3000);