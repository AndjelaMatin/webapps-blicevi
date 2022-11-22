import express from "express"
import bodyParser from "body-parser"
import connect from './../db.js'
import mongo from "mongodb"
import { MongoAPIError } from "mongodb"

const app=express()
const port=3000
app.use (bodyParser.json())
//zadatak 1
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
//zadatak 3
app.get('/getItemById/:id',async(req,res)=>{
  let id=req.params.id
  let db=await connect()
  let doc=await db.collection('collection2').findOne({ _id: mongo.ObjectId(id)})
  if(doc){
    res.json({"status":"OK","data":doc})
  }
  else{
    res.json({"satatus":"Failed"})
  }
})
//zadatak 4
app.patch('/updateItemPrice/:id',async(req,res)=>{
  let data=req.body
  let id=req.params.id
  let db=await connect()
  let result=await db.collection('collection2').updateOne(
    {_id: mongo.ObjectId(id)},
    {$set: data,}
    )
    res.json(result)
})

app.listen(port,()=>console.log(`Work on port ${port}`))
