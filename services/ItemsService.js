exports.getAllItems = (req,res)=>{
    res.json({
        message: "a list of all users"  
      })
};


exports.getAnItem = (req,res)=>{
    res.json({
        message: `description of product with id ${req.params.id}`  
      })
};


exports.createAnItem = (req,res)=>{
    res.json({
        message: "Item created"  
      })
};


exports.updateAnItem = (req,res) =>{
    res.json({
        message: `update of product with id ${req.params.id}` 
        })
};


exports.deleteAnItem = (req,res)=>{
    res.json({
        message: `delete product with id ${req.params.id}`  
        })
};

//importation or middleware