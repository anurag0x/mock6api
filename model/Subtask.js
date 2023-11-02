const mongoose=require("mongoose")
const Task=require("./Task")
const Board=require("./Board")
const schema=mongoose.Schema({
    title : String,
	isCompleted : Boolean
   })
   const SubtaskModel=mongoose.model("subtask",schema)
   module.exports =SubtaskModel