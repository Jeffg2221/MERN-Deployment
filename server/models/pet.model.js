const mongoose = require('mongoose')


const PetsSchema = new mongoose.Schema(
    {
name:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,
type:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,
description:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,
skill1:{
        type:String,
        
        
    } ,
skill2:{
        type:String,
        
        
    } ,
skill3:{
        type:String,
        
    
    } ,
    
},{timestamps:true});



const Pets = mongoose.model('pets', PetsSchema);

module.exports = Pets

