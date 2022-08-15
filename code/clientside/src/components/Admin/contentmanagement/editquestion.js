
import React from 'react'
import '../user management/adduser.css'
import storeData from '../../../store/store'
import axios from 'axios'
import { useForm } from 'react-hook-form'
export default function EditQuestion(props) {

  const {register,handleSubmit}=useForm()
 

 
  function getdata(e){

    const qu={
      "QuestionStatement":e.QuestionStatement,
      "OptionA":e.OptionA,
      "OptionB":e.OptionB,
      "OptionC":e.OptionC,
      "OptionD":e.OptionD,
      "answer":e.answer,
      "quizzID":props.data.quizzID,
      questionID:props.data.questions._id,
      questionIndex:props.data.questionIndex,
    };
    axios.post("/updatequestion",qu).then((res)=>{
        alert('Question has been updated...')
      })

  }
  return (
    <div>
       <div className='heading'>Edit Question</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img alt='' src='addquizz.png'/>
        </div>



<form method='post'  onSubmit={handleSubmit(getdata)}>
  


 <label htmlFor="QuestionStatement">Question</label>
 <input  id='QuestionStatement' type={'text'} defaultValue={props.data.questions.QuestionStatement} {...register("QuestionStatement")} required  placeholder='Question Statement' />

 <label htmlFor="OptionA">Option A</label>
 <input  id='OptionA' type={'text'} defaultValue={props.data.questions.OptionA} {...register("OptionA")} required  placeholder='Option A' />

 <label htmlFor="OptionB">Option B</label>
 <input  id='OptionB' type={'text'} defaultValue={props.data.questions.OptionB} {...register("OptionB")} placeholder='Option B' required  />

 <label htmlFor="OptionC">Option C</label>
 <input  id='OptionC' type={'text'} defaultValue={props.data.questions.OptionC} {...register("OptionC")} placeholder='Option C' required  />
 
 
 <label htmlFor="OptionD">Option D</label>
 <input  id='OptionD' type={'text'} defaultValue={props.data.questions.OptionD} {...register("OptionD")} placeholder='Option D' required  />

 <label htmlFor="Answer">Answer</label>
 <input  id='Answer' type={'text'} defaultValue={props.data.questions.answer} {...register("answer")} placeholder='Right Answer' required  />
<div>
 
</div>

<div className='formbutton'>
<button className='button' >Submit</button>
<button className='button' onClick={((e)=>{
storeData.dispatch({
type:"back move",
c:"Content Management",
})
})} type='reset'>Cancel</button>
</div>

</form>

     
    </div>
    </div>
  )
}
