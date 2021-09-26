const express = require('express');
const mongoose= require('mongoose');
const bodyparser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

require('dotenv/config')

const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyparser.json());

app.use('/', authRoutes);



mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected successfully');
});

app.listen(3000, () => {
    console.log('Listing on port 3000');
});

