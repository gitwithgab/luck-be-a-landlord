const express = require('express')
const router = express.Router()


const itemsService = require("../services/ItemsService.js")


//view list of item
router.get('/', itemsService.getAllItems)

//view single item
router.get("/:item_name", itemsService.getAnItem)

//add a new item
router.post('/', itemsService.createAnItem)

  //updates an item
router.put('/:id', itemsService.updateAnItem)

  //deletes an item
router.delete('/:item_name', itemsService.deleteAnItem)


module.exports = router