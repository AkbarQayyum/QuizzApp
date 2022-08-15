
import React from 'react'
import './Admin/user management/adduser.css';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export default function SignUp() {
const {handleSubmit,register}=useForm()
let navigate=useNavigate()
 
function handlesubmit(e){
  let form=new FormData();
  form.append('firstname',e.firstname);
  form.append('lastname',e.lastname);
  form.append('username',e.username);
  form.append('password',e.password);
  form.append('email',e.email);
  form.append('phone',e.phone);
  form.append('status','pending');
  form.append('role',e.role);
  form.append('gender',e.gender);
  form.append('image',e.image[0]);
  form.append('profile',e.image[0].name);
 axios.post('/registerUser',form).then((res)=>{
   if(res.data=='user_register')
   {
     alert('user register successfully');
     navigate(`/waiting/${e.email}`);
   }
 })
}
  return (
    <div style={{width:'80%',margin:'10px auto'}}>
       <div className='heading'>User Regiatration</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img src='adduser.png'/>
        </div>
     <form   onSubmit={handleSubmit(handlesubmit)} >
       <label htmlFor="firstname">First Name</label>
      <input id='firstname' type={'text'}   {...register("firstname")} placeholder='Enter FirstName' required/>
      <label htmlFor="lastname">Last Name</label>
      <input  id='lastname' type={'text'}   {...register("lastname")}  placeholder='Enter LastName' required />

      <label htmlFor="username">CNIC (xxxxx-xxxxxxx-x)</label>
      <input  id='username' type={'text'} pattern="^\d{5}-\d{7}-\d{1}$"    {...register("username")} placeholder='Enter CNIC (xxxxx-xxxxxxx-x)' required />

      <label htmlFor="password">Password</label>
      <input  id='password' type={'text'}   {...register("password")}  placeholder='Enter Password' required />

<div>
      <label htmlFor="role">Role : </label>
    <select id='role' {...register('role')}  >
      <option >Choose Role</option>
      <option value={'student'}>Student</option>
    </select>


    <label htmlFor="gender">Gender : </label >
    <select id='gender' {...register('gender')}  >
      <option >Choose Gender</option>
      <option value={'male'}>Male</option>
      <option value={'female'}>Female</option>
    </select>
    </div>
    <label htmlFor="email">Email</label>
      <input  id='email' type={'email'}  {...register("email")}  placeholder='Enter Email Address' required  />


      <label htmlFor="phone">Phone # (0300-0000000)</label>
      <input  id='phone' type={'text'} {...register("phone")} pattern="^\d{4}-\d{7}$" placeholder='Enter Phone#' required  />


      <label htmlFor="image">choose profile pic</label>
      <p>Note: please choose your profile wisely it will never change again</p>
      <input  id='image' type={'file'} name='image' size='2000' accept=".jpg, .jpeg, .png" {...register("image")} required  />


<div className='formbutton'>
<button type='submit'>Submit</button> 
<button type='reset'>Cancel</button>
</div>

     </form>
    </div>
    </div>
  )
}
