const mongoose=require('mongoose');
const CourseSchema=new mongoose.Schema({
   
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
   
})
const Course=mongoose.model('Courses',CourseSchema);
module.exports=Course;
