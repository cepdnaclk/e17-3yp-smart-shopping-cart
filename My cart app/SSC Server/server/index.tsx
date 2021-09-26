/* eslint-disable prettier/prettier */
// require('./models/signup');
// import './models/SignUp';
// import authRoutes from './routes/authRoutes';

const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// require('./models/SignUp');
const authRoutes = require('authRoutes');

const app = express();

// app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://piriyaraj:piriyaraj12345@ssc.58jri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.get('/',(req,res)=>{
    res.send('hi Piriyaraj!');
});

mongoose.connect(mongoUri,{
    useNewUrlParser: true,

    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected successfully');
});

app.listen(3000,()=>{
    console.log('Listing on port 3000');
});

