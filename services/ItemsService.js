const itemsModel = require("../models/ItemsModel.js");


exports.getAllItems = (req,res)=>{

    itemsModel.find()
    .then(item=>{
        res.status(200).json({
            message : `List of all items`,
            data : item
        })
    })
    .catch(err=>{
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};


exports.getAnItem = (req,res)=>{
   
    itemsModel.findOne({item_name:req.params.item_name})
    .then(item=>{
       
        if(item)
        {
            res.status(200).json({
                message : `${req.params.item_name} found`,
                data : item
            })
        }

        else
        {
            res.status(404).json({
                message : `${req.params.item_name} not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message : `Error ${err}` 
        })
    })
};


exports.createAnItem = (req,res)=>{

    const newItem = req.body;

    const item = new itemsModel(newItem);

    item.save()
    .then(item=>{
        res.status(200).json({
            message : `The item was created successfully`,
            data : item
        })
    })
    .catch(err=>{
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};

exports.updateAnItem = (req,res) =>{

    const updatedData =req.body;
    itemsModel.findByIdAndUpdate(req.params.id, updatedData, {new:true})
    .then(item=>{
        if(item)
        {
            res.status(200).json({
                message : `${req.params.id} was successfully updated`,
                data : item
                })
        }

        else
        {
            res.status(404).json({
                message : `${req.params.id} not found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};


exports.deleteAnItem = (req,res)=>{
    
    itemsModel.findOneAndRemove({item_name:req.params.item_name})
    .then(item=>{
        if(item)
        {
            res.status(200).json({
                message : `${req.params.item_name} was successfully deleted`
                })
        }

        else
        {
            res.status(404).json({
                message : `${req.params.item_name} not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};
