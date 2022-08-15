
import React from 'react'
import './adduser.css';
import storeData from '../../../store/store'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
export default function AssignQuizz(props) {

    const{register,handleSubmit}=useForm();

function handlesubmit(e){
  axios.post('/assignquizz',e).then((res)=>{
      alert('quizz assigned')
  })
}
  return (
    <div>
       <div className='heading'>Assign Quizzes</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img src='addquizz.png'/>
        </div>
     <form method='post'  onSubmit={handleSubmit(handlesubmit)}>
       <label htmlFor="userID">User ID</label>
      <input id='userID' type={'text'} value={props.data} defaultValue={props.data}  {...register("userID")} required/>
      <label htmlFor="quizzID">Quizz ID</label>
      <input  id='quizzID' type={'text'} defaultValue={''} {...register("QuizzID")} required />

    
<div className='formbutton'>
<button className='button' type='submit'>Submit</button>
<button className='button' onClick={(()=>{
storeData.dispatch({
  type:"back move",
  c:"User Management",
})
})} type='reset'>Cancel</button>
</div>

     </form>
    </div>
    </div>
  )
}
