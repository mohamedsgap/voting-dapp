// MONGODB PW: un0xlqfbTxUVH7In
// MONGODB CONNECTION: mongodb+srv://mohamed:<password>@cluster0-fytzm.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://mohamed:un0xlqfbTxUVH7In@cluster0-fytzm.mongodb.net/test?retryWrites=true&w=majority').then(() => {
    console.log("'Successfully connected to MongoDB Atlas!'");
}).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
}); 

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(bodyParser.json());
app.use('/api/auth', userRoutes);

module.exports = app;   