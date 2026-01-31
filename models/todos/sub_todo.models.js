

import mongoose from "mongoose"

const sunTodoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  
  },
  complete:{
    type:Boolean,
    default: false
  },
  createdBy:{
      type:mongoose.Schema.Type.ObjectId,
    ref:'User',
  },
}, {timestamps:true});
export const SubTodo = mongoose.model('subTodo', subTodoSchema)
