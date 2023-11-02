const mongoose=require("mongoose")
const Board=require("./Board")
const Subtask=require("./Subtask")
const schema=mongoose.Schema({
    id:String,
    title : String,
	description : String,
	status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
	subtask : [{ type: String, ref: 'Subtask'}]
   })
   const TaskModel=mongoose.model("task",schema)
   module.exports =TaskModel