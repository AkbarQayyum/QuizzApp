
import React from 'react'
import '../user management/adduser.css'
import storeData from '../../../store/store'
export default function CreateQuizz() {
  function handlesubmit(e){
    e.preventDefault()
    console.log("hello");
  }
  return (
    <div>
       <div className='heading'>Add Videos</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img alt='' src='addvideo.png'/>
        </div>
     <form method='post'  onSubmit={handlesubmit}>
       <label htmlFor="course">Course Name</label>
      <input id='course' type={'text'} defaultValue={''} name="course" placeholder='Course Name' />
      <label htmlFor="CourseDis">Course Discription</label>
      <input  id='CourseDis' type={'text'} defaultValue={''} name="CourseDis" placeholder='Course Discription' />

      <label htmlFor="TeacherName">Teacher Name</label>
      <input  id='TeacherName' type={'text'} defaultValue={''} name="TeacherName" placeholder='Teacher Name' />

      <label htmlFor="TeacherDiscription">Teacher Discription</label>
      <input  id='TeacherDiscription' type={'text'} defaultValue={''} name="TeacherDiscription" placeholder='Teacher Discription' />
      
      <label htmlFor="LectureHeading">Lecture Heading</label>
      <input  id='LectureHeading' type={'text'} defaultValue={''} name="LectureHeading" placeholder='Lecture Heading Statement' />

      <label htmlFor="video">Select Video</label>
      <input  id='video' type={'file'} defaultValue={''} name="video" placeholder='Select Video' />

  
  
<div className='formbutton'>
<button type='submit'>Submit</button>
<button onClick={(()=>{
storeData.dispatch({
  type:"back move",
  c:"CreateContent",
})
})} type='reset'>Cancel</button>
</div>

     </form>
    </div>
    </div>
  )
}
