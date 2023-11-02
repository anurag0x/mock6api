const express=require("express")
const BoardModel = require("../model/Board")
const Board = require("./Board")

const datarouter=express.Router()

datarouter.get("/",async(req,res)=>{
    const {name}=req.query
    if(name){
        const  board=Board.filter((el)=>el.name==name) 
        return res.send({board:board})

    }
    try {
      
      res.status(200).send({Board:Board})  
    } catch (error) {
        console.log(error)
    }
})
datarouter.get("/:boardid",async(req,res)=>{
    const {boardid}=req.params
     try {
       const  board=Board.filter((el)=>el._id==boardid)
        res.send({board:board})
     } catch (error) {
        console.log(error)
        res.send("Wrong")
     }
})

// datarouter.get("/:boardid/task/:taskid?",async(req,res)=>{
//     const {boardid,taskid}=req.params
//     console.log(taskid)
//      try {
//        const  board=Board.filter((el)=>el._id==boardid)
//        console.log(board)
//        const task=board.tasks.filter((el)=>{
//         console.log(el)
//         //  el.id==taskid
//     })
//         res.send({task:task})
//      } catch (error) {
//         console.log(error)
//         res.send("Wrong")
//      }
// })

module.exports=datarouter