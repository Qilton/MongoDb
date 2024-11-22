const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
    todo: {
        type:String,
         required:true
        },
    isCompleted:{
        type:Boolean,
        default:false
    }
  });

  const TodoModel = mongoose.model('Todo', TodoSchema);
  module.exports = TodoModel;

