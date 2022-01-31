const express = require('express');
const dotenv = require('dotenv');

// ---- Config dotenv ----
dotenv.config({path:'./config.env'});

const app = express();

const PORT = process.env.PORT;

// ---- middlewares ----

app.listen(PORT, ()=> console.log(`Server is running at ${PORT}`));