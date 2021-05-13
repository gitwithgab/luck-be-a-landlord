const express = require("express");
const mongoose = require('mongoose');

const AuthController  = require("./controllers/AuthController");
const app = express();


app.use(express.json());


app.use("/auth",AuthController);


const PORT=3000;
app.listen(PORT,()=>{
   
    console.log(`Web Server is up and running on port ${PORT}`)

});