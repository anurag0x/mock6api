const express=require("express")
const dbconnection = require("./db")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())

app.listen(8080,async()=>{
    
try {
    await dbconnection
    console.log("Server running on port=>"+"  "+"http://localhost:8080")
   
} catch (error) {
    console.log(error)
}
})