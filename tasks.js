const express =require('express')
const router =express.Router()
const {getToDos, seeToDos, 
    updateItem,deleteItem,getItem} =require('./todos')


router.route('/').get(getToDos).post(seeToDos)
router.route('/:id').get(getItem).patch(updateItem).delete(deleteItem)

module.exports=router