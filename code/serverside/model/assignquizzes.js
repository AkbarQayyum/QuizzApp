const mongoose=require('mongoose');
const Assignment=new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    QuizzID:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },

})
const AssignQuizzes=mongoose.model('AssignQuizzes',Assignment);
module.exports=AssignQuizzes;
