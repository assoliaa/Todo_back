const Task = require('./schema')
const asyncThing = require('./async')


const getToDos = asyncThing(async(req, res)=>{
  const tasks =await Task.find({})
  res.status(200).json({tasks}) 
})

const seeToDos = asyncThing(async(req, res)=>{
const task =await Task.create(req.body)
res.status(201).json({task})
})

const deleteItem =asyncThing(async(req, res)=>{
  const{id:TodoID} =req.params;
  const todo =await Task.findByIdAndDelete({_id:TodoID})
if(!todo){
      return res.status(404).json({msg:"nothing found"})
  }
res.status(200).json({todo})
})

const getItem = asyncThing(async(req, res)=>{
  const{id:TodoId} =req.params;
  const todo =await Task.findOne({_id:TodoId})
if(!todo){
  return res.status(404).json({msg:"nothing found"})
}
res.status(200).json({todo})
})

const updateItem =asyncThing(async(req, res)=>{
  const{id:TodoId} =req.params;
  const todo = await Task.findByIdAndUpdate({_id:TodoId},req.body, 
      {
          new:true
      })
if(!todo){
      return res.status(404).json({msg:"nothing found"})
  }
  res.status(200).json({todo})
})


module.exports ={
  seeToDos, 
  getToDos,
  updateItem,
  deleteItem,
  getItem
}