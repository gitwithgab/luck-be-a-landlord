const express = require("express");
const mongoose = require('mongoose');


require('dotenv').config({path:"config/Keys.env"});


const itemsController  = require("./controllers/ItemsController");


const app = express();


app.use(express.json());


app.use("/items",itemsController);


const PORT=3000;
app.listen(PORT,()=>{
   
    console.log(`Web Server is up and running on port ${PORT}`)

    mongoose.connect(`${process.env.MONGO_DB_CONNECT}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(`Connected successfully to MongoDB`)
    })

    .catch(err=>{
        console.log(`Error occured ${err}`)
    })

})