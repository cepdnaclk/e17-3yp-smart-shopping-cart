const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser"); //to read json format data

require("dotenv/config");

const authroute = require("./routes/auth");
const userroute = require("./routes/user");

const productroute = require("./routes/products"); //for product list

/*
mongoose.connect( process.env.db_connection,
    {useNewUrlParser:true},()=>  
    console.log('connected to db') );   
/*/

//CONNECT TO DB
mongoose.connect(process.env.db_connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));
db.once("open", function () {
  console.log("connected db");
});

//MIDDLEWARE
app.use(bodyParser.json()); //every time there is app call this function will execute
//this should come before route middlewares

//ROUTE MIDDLEWARES
app.use("/user/all", userroute); //  USER
app.use("/user", authroute); //  AUTH

app.use("/products", productroute); //products

//  HOME
app.get("/", (req, res) => {
  res.send("hello home");
});

//LISTEN
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log("listening "));

//for product details

//const ProductModel = require("./models/ProductModel");
