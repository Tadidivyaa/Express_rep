var express =require("express");
var  imp1=require("./module");
const app=express();
const port=1301;
app.get("/",(req,res)=>{
res.send(imp1.myDate());
    // res.write(imp1.myDate());
});
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
