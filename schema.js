const mongoose = require('mongoose')

const Task = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  status: {
    type: String,
    default :"To Do",
    required: true
  }
})

module.exports = mongoose.model('Task', Task)