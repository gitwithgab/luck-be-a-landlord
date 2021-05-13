const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{

    res.json({
        message : "This is the GET request for /auth"
    })

})


router.post("/",(req,res)=>{

    res.json({
        message : "This is the post request for /auth"
    })

})





module.exports = router;