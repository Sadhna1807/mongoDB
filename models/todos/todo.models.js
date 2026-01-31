import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you want to link this to a User model
    required: true,
  },
  subTodos:[
  {
    type:mongoose.Schema.Type.ObjectId,
    ref:'SubTodo',
  },
],
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);