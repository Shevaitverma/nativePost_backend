const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

// ---- import routes ----- 
const authRoute = require('./routes/auth');
const { Mongoose } = require('mongoose');

// ---- Config dotenv ----
dotenv.config({path:'./config.env'});

// ---- database connection ----
mongoose.connect(process.env.DB).then(()=>{
    console.log(`DB connected sucessfully`);
}).catch((err)=> console.log('Something went wrong!'));

// ---- middlewares ----
app.use(express.json());

// ---- Route middlewares ----
app.use('/user', authRoute);

// ---- listening to server ----
const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Server is running at ${PORT}`));
