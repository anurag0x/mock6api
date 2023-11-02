const mongoose=require("mongoose")
const Task=require("./Task")
const Subtask=require("./Subtask")
const schema=mongoose.Schema({

     name: String,
     tasks: [{ type: String, ref: 'Task'}]
   })
   const BoardModel=mongoose.model("board",schema)
   module.exports =BoardModel