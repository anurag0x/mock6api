const express=require("express")
const dbconnection = require("./db")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const datarouter = require("./routes/todoroutes")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())

app.use("/",datarouter)
app.listen(8080,()=>{
    console.log("Server running on port=>"+"  "+"http://localhost:8080")
})