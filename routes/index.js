import express from 'express'
import Parent from '../models/parent.js'
import Child from '../models/child.js'
import PCRel from '../models/pc.js'

const indexrouter=express.Router()

indexrouter.post("/addchild", async(req,res)=>{

    res.json(await Child.create(req.body))
    })
    
    
    indexrouter.post("/parent", async(req,res)=>{
    
    res.json(await Parent.create(req.body))
    })
    
    
    indexrouter.post("/custody/:parent/:child", async(req,res)=>{
    
    const {parent, child}= req.params
    
    const p= await Parent.findOne({name:parent})
    const c= await Child.findOne({name:child})
    
    res.json(await PCRel.create({parent: p._id, child: c._id}))
    })
    
    
    
    indexrouter.get("/parents/:child", async (req,res)=>{
    
    res.json(await PCRel.find({child: req.params.child}).populate("parent").populate("child"))
    })
    



export default indexrouter;