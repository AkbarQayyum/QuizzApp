import React from 'react'
import './Dashboard.css'
export default function Welcome() {
  let obj=JSON.parse(localStorage.getItem('adminlogin'));
  let firstname=obj[0].firstname;
  let lastname=obj[0].lastname;
  return (
    <div >
<div className='welcomemsg'>
  <h3> <span>Welcome.!</span> <br/>
  MR./MRS. <span style={{fontWeight:'bolder',fontSize:'110%',color:'gray',textDecoration:'underline'}}>{firstname} {lastname}</span> To The Admin Dashboard Panel</h3>
  <p>Our mission is to improve patient care with comprehensive clinical information and resources  essential to physicians and healthcare professionals. To provide the guideline for preparation of regional and international licencing exams addressing the knowledge, attitude and practice domains keeping in view the essence of medical education.</p>
 
</div>


    </div>
  )
}
