
import React, { useState ,useEffect} from 'react'
import '../user management/adduser.css'
import storeData from '../../../store/store'
import axios from 'axios'
import { useForm } from 'react-hook-form'
export default function CreateQuizz() {

  const {register,handleSubmit}=useForm()
  const [info,setinfo]=useState()
  let [course,setcourse]=useState([{}])
  let [findcourse,setfindcourse]=useState({})
  let [option,setoption]=useState('false')
let [q,setq]=useState([]);
  let c=1;
  useEffect(()=>{
    axios.get('/ViewCourses').then((res)=>{
      setcourse(res.data);
    })
  
  },[])
 
  function selectcourse(e){
    let name=e.target.value;

    course.filter((f)=>{
      if(f.course==name)
      {
        setfindcourse(f)
        setoption('true')
      }
    })
  }
  function getdata(e){

    const additionalinfo={
      course:e.course,
      CourseDis:e.CourseDis,
      TeacherName:e.TeacherName,
      TeacherDiscription:e.TeacherDiscription,
      level:e.level,
      quizztype:e.quizztype,
      price:e.price
    }
    setinfo(additionalinfo);
    const qu={
      "QuestionStatement":e.QuestionStatement,
      "OptionA":e.OptionA,
      "OptionB":e.OptionB,
      "OptionC":e.OptionC,
      "OptionD":e.OptionD,
      "answer":e.answer,
    };
    setq([...q,qu]);
   alert( "questions added")
   

  }


  function submitform(e)
  {
    e.preventDefault()
    let obj={
      course:findcourse.course,
      CourseDis:findcourse.CourseDis,
      TeacherName:findcourse.TeacherName,
      TeacherDiscription:findcourse.TeacherDiscription,
      price:info.price,
      level:info.level,
      quizztype:info.quizztype,
      questions:q,
    }
   
    axios.post("/addquizz",obj).then((res)=>{
      alert('Quizz has been Created...')
    })
  }


 
 
  return (
    <div>
       <div className='heading'>Create Quizz</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img alt='' src='addquizz.png'/>
        </div>


        <form method='post'>
        <label htmlFor="Course">Course : </label>
    <select id='Course' style={{width:"100%"}}  onChange={selectcourse} required >
   <option>Choose Course</option>
   {
     course.map((m)=>{
       return <option value={m.course}>{m.course}</option>
     })
   }

    </select>

        </form>
        
{
  option==='true'?<form method='post'  onSubmit={handleSubmit(getdata)}>
  
  
 <label htmlFor="quizztype">Quizz Type : </label>
<select id='quizztype' style={{width:"100%"}} {...register('quizztype')} required >
 <option disabled>Choose Type</option>
 <option value={'paid'}>Paid</option>
 <option value={'free'}>Free</option>
</select>


<label htmlFor="price">Price</label>
 <input  id='price' type={'number'} defaultValue={''} {...register("price")} required  placeholder='Question Statement' />


 <label htmlFor="QuestionStatement">Question</label>
 <input  id='QuestionStatement' type={'text'} defaultValue={''} {...register("QuestionStatement")} required  placeholder='Question Statement' />

 <label htmlFor="OptionA">Option A</label>
 <input  id='OptionA' type={'text'} defaultValue={''} {...register("OptionA")} required  placeholder='Option A' />

 <label htmlFor="OptionB">Option B</label>
 <input  id='OptionB' type={'text'} defaultValue={''} {...register("OptionB")} placeholder='Option B' required  />

 <label htmlFor="OptionC">Option C</label>
 <input  id='OptionC' type={'text'} defaultValue={''} {...register("OptionC")} placeholder='Option C' required  />
 
 
 <label htmlFor="OptionD">Option D</label>
 <input  id='OptionD' type={'text'} defaultValue={''} {...register("OptionD")} placeholder='Option D' required  />

 <label htmlFor="Answer">Answer</label>
 <input  id='Answer' type={'text'} defaultValue={''} {...register("answer")} placeholder='Right Answer' required  />
<div>
 <label htmlFor="level">Level : </label>
<select id='level' style={{width:"100%"}} {...register('level')} required >
 <option disabled>Choose level</option>
 <option value={'low'}>low</option>
 <option value={'medium'}>medium</option>
 <option value={'tough'}>tough</option>
</select>


</div>

<div className='formbutton'>
<button type='submit' name='addq' style={{margin:'20px auto'}}>Add</button>
</div>
<div className='formbutton'>
<button type='button' onClick={submitform}>Submit</button>
<button onClick={((e)=>{
storeData.dispatch({
type:"back move",
c:"CreateContent",
})
})} type='reset'>Cancel</button>
</div>

</form> :null
}

     
    </div>
    </div>
  )
}
