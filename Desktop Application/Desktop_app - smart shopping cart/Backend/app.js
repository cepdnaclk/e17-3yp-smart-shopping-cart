const express = require('express');
const cors = require('cors');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');      //to read jason format data

require('dotenv/config');


const authroute = require('./routes/auth');
const userroute = require('./routes/user');

const routeProfile = require('./routes/profile');
const itemroute = require('./routes/items');

const payment = require('./routes/payment');

// cart route
const cart = require("./routes/cart");
const tempitems = require("./routes/tempitems");


/*
mongoose.connect( process.env.db_connection,
    {useNewUrlParser:true},()=>  
    console.log('connected to db') );   
/*/


//CONNECT TO DB
mongoose.connect(process.env.db_connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection pochu"));
db.once("open", function () {
    console.log("connected db yaaa");
});

app.use(cors());

//MIDDLEWARE
app.use(bodyParser.json());     //every time there is app call this function will execute
//this should come before route middlewares 


//ROUTE MIDDLEWARES
app.use('/mobileuser', userroute);        //  USER
app.use('/user', authroute);            //  AUTH

app.use('/profile', routeProfile);       //profile
app.use('/items', itemroute);       //profile

app.use("/tempitems", tempitems);

app.use(payment);     // Payment api

app.use(cart);                 // cart connection

//  HOME
app.get('/', (req, res) => {
    res.send('hellloooo home');
    console.log('home');
});

//LISTEN
const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0",() => console.log(`listening on ${port}`));

