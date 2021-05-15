const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemsSchema = new Schema({


    item_name:    
    {
        type:String,
        required:true
    },
    rarity:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    goldPerTurn:
    {
        type:Number,
        required:true
    }

});


const itemsModel = mongoose.model('item', itemsSchema);

module.exports = itemsModel; 