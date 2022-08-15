const express=require('express');
const mongoose=require('mongoose');
const app= express();
app.use(express.json());
require('./db/conn')
let user=[]
const RegisterUser=require('./model/UserSchema');
const Quizzes=require('./model/quizschema');
const AssignQuizzes=require('./model/assignquizzes');
const ResultSchema=require('./model/resultshema');
const Course = require('./model/courseschema');



const multer = require("multer");
const storage = multer.diskStorage({
    destination: 'client/build',
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })
   
  const upload = multer({ storage: storage }).single('image')

app.post("/addquizz",function(req,res){
    
  
    const quizz=new Quizzes(req.body);
    quizz.save().then((sav)=>{
        res.send("quizz data received")
    }).catch((error)=>{
        res.send(error);
    })
   
})

app.post('/deletequizz',function(req,res){
    Quizzes.findByIdAndDelete(req.body.id).then((result)=>{
        AssignQuizzes.deleteMany({"QuizzID":req.body.id}).then((r)=>{
            res.send('delete quizz');
        })
        
    })
})

app.post('/getquestions',function(req,res){
   Quizzes.findById(req.body.id).then((result)=>{
       res.send(result.questions)
   })
})

app.post("/registerUser",upload,function(req,res){


    console.log(req.body);
   const user=new RegisterUser(req.body);
   user.save().then((check)=>{
       if(check){
 res.send('user_register')
       }
   }).catch((err)=>{
       res.send('Error.');
   })
    });
    



app.get('/showuser',function(req,res){
    RegisterUser.find().then((result)=>{
        res.send(result)
    })
})


app.post('/showquizz',function(req,res){
    let cname=req.body.courseName
    Quizzes.find({"course":cname}).then((result)=>{
        res.send(result)
        
    })
})



app.post('/deleteuser',function(req,res){
  
    RegisterUser.findByIdAndDelete(req.body.id).then((result)=>{
        
        AssignQuizzes.deleteMany({"userID":req.body.id}).then((r)=>{
            res.send('deleted')
        })
    })
})



app.post('/foundedituser',function(req,res){

    RegisterUser.findById(req.body.id).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })
})

app.post('/updateUser',function(req,res){
    const id=req.body.id;
    const data=req.body.data;
    RegisterUser.updateOne({_id:id},{$set:{
        firstname:data.firstname,
        lastname:data.lastname,
        username:data.username,
        password:data.password,
        role:data.role,
        gender:data.gender,
        email:data.email,
        phone:data.phone
    }}).then((result)=>{
        res.send('User_update');
    }).catch((err)=>{
        res.send(err);
    })
})


app.post('/signin',function(req,res){
  
    RegisterUser.find({"username":req.body.CNIC,
"password":req.body.password,"status":"approved"}).then((result)=>{
   
        res.send(result);

})
})


app.post('/assignquizz',function(req,res){
    console.log(req.body.QuizzID)
    Quizzes.findById(req.body.QuizzID).then((re)=>{
        console.log(re)
        if(re){
            const obj={
                userID:req.body.userID,
                QuizzID:req.body.QuizzID,
                course:re.course
            }
            const AssignQuizz=new AssignQuizzes(obj);
            AssignQuizz.save().then((result)=>{
                res.send('quizz assigned')
            }).catch((err)=>{
                res.send(err)
            })
        }
    })
   
})

app.post('/myassignquizz',function(req,res){

    let id=req.body.id
    let cname=req.body.cname
        AssignQuizzes.find({userID:id,course:cname,}).then((result)=>{
            res.send(result)
        })
        
    })
    
    app.post('/getmyquizzdata',function(req,res){
        Quizzes.findById(req.body.id).then((result)=>{
            res.send(result)
        })
    })
app.post('/checkresult',function(req,res){
    ResultSchema.find({quizzID:req.body.quizzID}).then((result)=>{
        if(result=='')
        {
            const Assign= new ResultSchema(req.body)
            Assign.save().then((r)=>{
                console.log('save');
            })
        }
        else
        {
            res.send(result)
        }
    })
})

app.post('/getmyresult',function(req,res){
    ResultSchema.find({userID:req.body.id}).then((re)=>{
        res.send(re)
    })
})

app.post('/createCourse',function(req,res){
    console.log(req.body)
    const course=new Course(req.body);
    course.save().then((re)=>{
        res.send('Course Added')
    })
})
app.get('/ViewCourses',function(req,res){
Course.find().then((re)=>{
    res.send(re)
})
})

app.post('/deletecourse',function(req,res){
    Course.findByIdAndDelete(req.body.id).then((re)=>{
        res.send('deleted')
    })
})

app.post('/updatequestion',function(req,res){
    let quizzID=req.body.quizzID;
    let index=req.body.questionIndex;
    
  Quizzes.updateOne(
      {"questions._id":req.body.questionID},{
       "$set":{
             "questions.$.QuestionStatement":req.body.QuestionStatement,
             "questions.$.OptionA":req.body.OptionA,
             "questions.$.OptionB":req.body.OptionB,
             "questions.$.OptionC":req.body.OptionC,
             "questions.$.OptionD":req.body.OptionD,
             "questions.$.answer":req.body.answer,
             }
         
      }
      ).then((re)=>{
          res.send('updates')
      })
})

app.post('/updateuserstatus',function(req,res){
    RegisterUser.findByIdAndUpdate({"_id":req.body.id},{
        $set:{
            "status":"approved"
        }
    }).then((r)=>{
        res.send('approved')
    })
})

const PORT=process.env.PORT||4433;

if(process.env.NODE_ENV=="production")
{
    app.use(express.static("client/build"));
    
}

app.listen(PORT,console.log("server started on port 4433`"));