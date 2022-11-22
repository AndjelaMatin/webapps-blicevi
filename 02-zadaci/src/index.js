import express from "express"
import bodyParser from "body-parser"
import connect from './../db.js'
import { MongoAPIError } from "mongodb"

const app=express()
const port=3000
app.use (bodyParser.json())

app.post('/saveItem',async(req,res)=>{
  let db=await connect()
  let data=req.body
  let result=await db.collection('collection2').insertOne(data)
  if(result.insertedId){
    res.json({"status":"OK","message":"Item Hlace saved in DB"})
  }
  else{
    res.json({"status":"Failed"})
  }
})

app.listen(port,()=>console.log(`Work on port ${port}`))
