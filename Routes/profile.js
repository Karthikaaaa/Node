const express=require('express')
const router=express.Router()
const Profile= require('../Modules/profile')
var ObjectId = require('mongodb').ObjectId; 
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    const data=await Profile.findById(id).exec();
    console.log("req",req.params,data)
    res.send(data)
})
router.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const {firstName,
        lastName,
        displayName,
        email,
        personalPhone,
        officePhone,
        location}=req.body
    await Profile.findOneAndReplace({_id: ObjectId(id)},{firstName,
        lastName,
        displayName,
        email,
        personalPhone,
        officePhone,
        location}).exec();
        console.log("update", req, res)
    res.send("data updated successfully")
})
router.post('/',async(req,res)=>{
    console.log("req",req.body)
    const {firstName,
        lastName,
        displayName,
        email,
        personalPhone,
        officePhone,
        location}=req.body
    let  profile=new Profile({
        firstName,
        lastName,
        displayName,
        email,
        personalPhone,
        officePhone,
        location,
    })
    try{

        profile = await profile.save()
    }
    catch(e){
console.log("error",e)
    }
    res.send(profile._id)
})
module.exports=router