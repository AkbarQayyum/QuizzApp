
import React, { useEffect } from 'react'
import '../Admin/user management/adduser.css';
import storeData from '../../store/store'
import axios from 'axios'
import { useForm } from 'react-hook-form';
export default function EditProfile() {
  
 const {register, handleSubmit,formState: { errors },} = useForm();
 let obj=JSON.parse(localStorage.getItem('studentlogin'));


function userdata(e){

  const data={
      id:obj[0]._id,
      data:e,
  }
 axios.post('/updateUser',data).then((res)=>{
  
     alert('user Updated successfully');
     localStorage.setItem('studentlogin',JSON.stringify([{"_id":obj[0]._id,firstname:e.firstname,lastname:e.lastname,username:e.username,password:e.password,role:e.role,gender:e.gender,email:e.email,phone:e.phone,}]));
  
 })
}
  return (
    <div>
       <div className='heading'>Edit Users</div>
      <hr />
      <div className='adduserform'>
        <div className='formimg'>
          <img src='adduser.png'/>
        </div>
     <form method='post'  onSubmit={handleSubmit(userdata)}>
       <label htmlFor="firstname">First Name</label>
      <input id='firstname' type={'text'} {...register('firstname')} defaultValue={obj[0].firstname} name="firstname" required/>
      <label htmlFor="lastname">Last Name</label>
      <input  id='lastname' type={'text'} {...register('lastname')} defaultValue={obj[0].lastname} name="lastname" required />

      <label htmlFor="username">username/CNIC</label>
      <input  id='username' type={'text'} {...register('username')} value={obj[0].username} name="username" required />

      <label htmlFor="password">Password</label>
      <input  id='password' type={'text'} {...register('password')} defaultValue={obj[0].password} name="password" required />

<div>
      <label htmlFor="role">Role : </label>
    <select id='role' name='role' value={obj[0].role}  {...register('role')}>
      <option >Choose Role</option>
      <option value={'student'}>Student</option>
    </select>


    <label htmlFor="gender">Gender : </label >
    <select id='gender' name='gender' defaultValue={obj[0].gender} {...register('gender')}>
      <option >Choose Gender</option>
      <option value={'male'}>Male</option>
      <option value={'female'}>Female</option>
    </select>
    </div>
    <label htmlFor="email">Email</label>
      <input  id='email' type={'email'} defaultValue={obj[0].email} name="email" required {...register('email')} />


      <label htmlFor="phone">Phone #</label>
      <input  id='phone' type={'number'} defaultValue={obj[0].phone} name="phone" required {...register('phone')} />

<div className='formbutton'>
<button className='bt' type='submit'>Submit</button>
<button className='bt' onClick={(()=>{
storeData.dispatch({
  type:"back move",
  c:"profile",
})
})} type='reset'>Cancel</button>
</div>

     </form>
    </div>
    </div>
  )
}
