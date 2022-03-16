const mongoose=require('mongoose');

const fillSchema=new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    answered:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
});

const Fill=mongoose.model('Fill',fillSchema);
module.exports=Fill;