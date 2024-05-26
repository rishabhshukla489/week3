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
    if(req.query.age>=14){
        next();
    }else{
        return res.status(411).json({
            msg:"Sorry you are of not age yet"
        })
    }
}
app.use(isoldmiddleware);

app.get("/ride1",(req,res)=>{
   
        res.json({
            msg:"enjoy ride1"
        })
    
   
})
app.get("/ride2",(req,res)=>{
   
        res.json({
            msg:"enjoy ride1"
        })
   
   
})
app.listen(3000);