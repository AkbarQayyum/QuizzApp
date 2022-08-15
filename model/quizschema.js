const mongoose=require('mongoose');
const Questions=new mongoose.Schema({
    QuestionStatement:{
        type:String,
        required:true
    },
    OptionA:{
        type:String,
        required:true
    },
    OptionB:{
        type:String,
        required:true
    },
    OptionC:{
        type:String,
        required:true
    },
    OptionD:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
  
})
const Quizzschema=new mongoose.Schema({
   
        course:{
            type:String,
            required:true
        },
        CourseDis:{
            type:String,
            required:true
        },
        TeacherName:{
            type:String,
            required:true
        },
        TeacherDiscription:{
            type:String,
            required:true
        },
        quizztype:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        level:{
            type:String,
            required:true
        },
    questions:{
        type:[Questions]
    }
})
const Quizzes=mongoose.model('QuizzData',Quizzschema);
module.exports=Quizzes;
