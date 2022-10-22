const mongoose=require('mongoose')

const profileSchema=new mongoose.Schema({
     firstName:{type:String},
     lastName:{type:String},
     displayName:{type:String},
     email:{type:String},
     personalPhone:{type:Number},
     officePhone:{type:Number},
     location:{type:String},
})

module.exports=mongoose.model('Profile',profileSchema)