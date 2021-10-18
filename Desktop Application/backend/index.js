const express = require('express')
const app = express()  //app --> object returned by express()

const mongoose = require("mongoose")
const dotenv = require('dotenv')    //.env is used for secure password and username

const routeurls = require('./routes/routes.js') //request->server.js-->router.js

const cors = require('cors')

// cart route
const cart =require("./routes/cart");

dotenv.config()

mongoose.connect(process.env.Database_Access, { useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log("Database connected"))


//to pass our incoming and outgoing request
app.use(express.json())     //activated body parser
app.use(cors())     //initializing cors

//redirecting server to router.js
app.use('/app',routeurls)       //www.mywebite.com/app/signup  (/app --> base path)
app.use(cart);
app.listen(4000,()=>console.log("Server is up and running"))