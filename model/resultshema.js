const mongoose=require('mongoose');
const ReSchema=new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    quizzID:{
        type:String,
        required:true
    },
    totalMarks:{
        type:Number,
        required:true
    },
    obtainedMarks:{
        type:Number,
        required:true
    },
    correctQuestions:{
        type:Number,
        required:true
    },
    wrongQuestions:{
        type:Number,
        required:true
    },
    marksAvg:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})
const ResultSchema=mongoose.model('Result',ReSchema);
module.exports=ResultSchema;
