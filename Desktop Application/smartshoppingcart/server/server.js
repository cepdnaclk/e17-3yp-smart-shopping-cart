const express=require('express');
const bodyParser=require("body-parser");
var fs =require('fs');
const app=express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',function(err,res){
    res.sendFile(__dirname+"/index.html");
});

app.get('/userData',function(err,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/userRegistation",function(req,res){
    console.log(req.body);
    // var userName=req.body.userName;
    // var userDob=req.body.userDob;
    // var userProfession=req.body.userProfession;
    // var userId=req.body.userId;
    // console.log(userName,userDob,userProfession,userId);
    // var userData={
    //     userName:userName,
    //     userDob:userDob,
    //     userProfession:userProfession
    // };
    // userObj={};
    // userObj[userId]=userData;
    // res.sendFile(__dirname+"/index.html");
    // res.send(userObj);
    // res.end("welcome back");
    
})
app.listen(3000);