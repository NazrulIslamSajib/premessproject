const mongoose=require("mongoose"); 
const userSchema=mongoose.Schema({
   username:{
       type:String,
       require:true
   }, 
   password:{
       type:String,
       require:true
   },
   createOn:{
       type:Date,
       default:Date.now
   }
})
module.exports=mongoose.model("user",userSchema);