const mongoose=require('mongoose')

const db='mongodb+srv://AkbarQayyum:Akbar1234@cluster0.ughff.mongodb.net/QuizzApp?retryWrites=true&w=majority'
mongoose.connect(db).then(()=>{
    console.log('connection successfull')
}).catch((err)=>{
    console.log(err);
})
