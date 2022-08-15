
import React from 'react'
import '../user management/adduser.css'
import storeData from '../../../store/store'
import { useState } from 'react'
import axios from 'axios'

export default function AddCourse() {


  let [user,setuser]=useState({
    course:'',CourseDis:'',TeacherName:'',TeacherDiscription:'',
  })
function setValue(e){
  const name=e.target.name;
  const value=e.target.value;
 setuser({...user,[name]:value});

}
function handlesubmit(e){
  e.preventDefault()
 axios.post('/createCourse',user).then((res)=>{
   if(res.data=='Course Added')
   {
     alert('Course Added successfully');
   }
 })
}
  return (
    <div>
       <div className='heading'>Add Course</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img src='addquizz.png'/>
        </div>
     <form method='post'  onSubmit={handlesubmit}>
       <label htmlFor="course">Course</label>
      <input id='course' type={'text'} onChange={setValue} defaultValue={user.course} name="course" required/>
      <label htmlFor="CourseDis">Course Discription</label>
      <input  id='CourseDis' type={'text'} onChange={setValue} defaultValue={user.CourseDis} name="CourseDis" required />

      <label htmlFor="TeacherName">Teacher Name</label>
      <input  id='TeacherName' type={'text'} onChange={setValue} defaultValue={user.TeacherName} name="TeacherName" required />

      <label htmlFor="TeacherDiscription">Teacher Discription</label>
      <input  id='TeacherDiscription' type={'text'} onChange={setValue} defaultValue={user.TeacherDiscription} name="TeacherDiscription" required />

<div className='formbutton'>
<button className='button' type='submit'>Submit</button>
<button className='button' onClick={(()=>{
storeData.dispatch({
  type:"back move",
  c:"Course Management",
})
})} type='reset'>Cancel</button>
</div>

     </form>
    </div>
    </div>
  )
}
