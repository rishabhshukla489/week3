const express =require('express');
const z=require("zod"); 

const app=express();
const schema=z.array(z.number())
app.use(express.json());

// const schema=z.object({
//     email: z.string(),
//     password: z.string(),
//     country: z.literal("IN").or(z.literal("US")),
//     kisney:z.array(z.number())
// })

app.post("/health-checkup",(req,res)=>{
    const kidneys =req.body.kidneys;
   const response =schema.safeParse(kidneys);
   if(!response.success){
    res.status(411).json({
        msg: "input is invalid"
    })
   }else{res.send({response});}
    

});

app.use((err,req,res,next)=>{
    res.json({
        msg: "something went wrong"
    })
})

app.listen(3000);