const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');      //to read jason format data

require('dotenv/config');

  
const authroute = require('./routes/auth');
const userroute = require('./routes/user');

const routeProfile = require('./routes/profile');

const payment = require('./routes/payment');

const cartConnection = require('./routes/CartConnection');

 
/*
mongoose.connect( process.env.db_connection,
    {useNewUrlParser:true},()=>  
    console.log('connected to db') );   
/*/


//CONNECT TO DB
mongoose.connect(process.env.db_connection,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection pochu"));
db.once("open",function() {
    console.log("connected db yaaa");
});



//MIDDLEWARE
app.use(bodyParser.json());     //every time there is app call this function will execute
//this should come before route middlewares 
 

//ROUTE MIDDLEWARES
app.use('/user/all', userroute);        //  USER
app.use('/user', authroute);            //  AUTH

app.use('/profile', routeProfile);       //profile
  

app.use(payment);     // Payment api

app.use(cartConnection);                 // cart connection

//  HOME
app.get('/', (req,res)=>{
    res.send('hellloooo home');
    console.log('home');
});



 
//LISTEN
const port = process.env.PORT || 3000; 
app.listen(3000, ()=>console.log(`listening on ${port}`));

