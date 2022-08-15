
import React, { useEffect } from 'react'
import './adduser.css';
import storeData from '../../../store/store'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
export default function EditUser(props) {
  let obj={
    id:props.data,
  }
 const {register, handleSubmit,formState: { errors },} = useForm();
  let [founduser,setfounduser]=useState({});
useEffect(()=>{
    axios.post('/foundedituser',obj).then((res)=>{
        setfounduser(res.data);
    })
   
},[])
  

function userdata(e){
  const obj={
      id:props.data,
      data:e,
  }
 axios.post('/updateUser',obj).then((res)=>{
   if(res.data==='User_update')
   {
     alert('user Updated successfully');
   }
 })
}
  return (
    <div>
       <div className='heading'>Edit Users</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img style={{borderRadius:'50%'}} src={founduser.profile}/>
        </div>
     <form method='post'  onSubmit={handleSubmit(userdata)}>
       <label htmlFor="firstname">First Name</label>
      <input id='firstname' type={'text'} {...register('firstname')} defaultValue={founduser.firstname} name="firstname" required/>
      <label htmlFor="lastname">Last Name</label>
      <input  id='lastname' type={'text'} {...register('lastname')} defaultValue={founduser.lastname} name="lastname" required />

      <label htmlFor="username">username/CNIC</label>
      <input  id='username' type={'text'} {...register('username')} defaultValue={founduser.username} name="username" required />

      <label htmlFor="password">Password</label>
      <input  id='password' type={'text'} {...register('password')} defaultValue={founduser.password} name="password" required />

<div>
      <label htmlFor="role">Role : </label>
    <select id='role' name='role' defaultValue={founduser.role} {...register('role')}>
      <option >Choose Role</option>
      <option value={'admin'}>Admin</option>
      <option value={'student'}>Student</option>
    </select>


    <label htmlFor="gender">Gender : </label >
    <select id='gender' name='gender' defaultValue={founduser.gender} {...register('gender')}>
      <option >Choose Gender</option>
      <option value={'male'}>Male</option>
      <option value={'female'}>Female</option>
    </select>
    </div>
    <label htmlFor="email">Email</label>
      <input  id='email' type={'email'} defaultValue={founduser.email} name="email" required {...register('email')} />


      <label htmlFor="phone">Phone #</label>
      <input  id='phone' type={'number'} defaultValue={founduser.phone} name="phone" required {...register('phone')} />

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
