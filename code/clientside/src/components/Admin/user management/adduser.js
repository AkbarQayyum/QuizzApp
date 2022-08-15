
import React from 'react'
import './adduser.css';
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
   }
 })
}
  return (
    <div style={{width:'100%',margin:'10px auto'}}>
       <div className='heading'>User Regiatration</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img src='adduser.png'/>
        </div>
     <form   onSubmit={handleSubmit(handlesubmit)} >
       <label htmlFor="firstname">First Name</label>
      <input id='firstname' type={'text'}   {...register("firstname")} required/>
      <label htmlFor="lastname">Last Name</label>
      <input  id='lastname' type={'text'}   {...register("lastname")} required />

      <label htmlFor="username">username/CNIC</label>
      <input  id='username' type={'text'}   {...register("username")} required />

      <label htmlFor="password">Password</label>
      <input  id='password' type={'text'}   {...register("password")} required />

<div>
      <label htmlFor="role">Role : </label>
    <select id='role' {...register('role')}  >
      <option >Choose Role</option>
      <option value={'student'}>Student</option>
      <option value={'admin'}>Admin</option>
    </select>


    <label htmlFor="gender">Gender : </label >
    <select id='gender' {...register('gender')}  >
      <option >Choose Gender</option>
      <option value={'male'}>Male</option>
      <option value={'female'}>Female</option>
    </select>
    </div>
    <label htmlFor="email">Email</label>
      <input  id='email' type={'email'}  {...register("email")} required  />


      <label htmlFor="phone">Phone #</label>
      <input  id='phone' type={'number'} {...register("phone")} required  />


      <label htmlFor="image">choose profile pic</label>
      <p>Note: please choose your profile wisely it will never change again</p>
      <input  id='image' type={'file'} name='image' size='2000' accept=".jpg, .jpeg, .png"  {...register("image")} required  />


<div className='formbutton'>
<button type='submit'>Submit</button>
<button type='reset'>Cancel</button>
</div>

     </form>
    </div>
    </div>
  )
}
