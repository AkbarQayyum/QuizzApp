import React,{useState,useEffect} from 'react'
import './Admin/contentmanagement/ContentManagement.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
export default function Quizzes() {
    let [state,setstate]=useState([{}])
    useEffect(()=>{
        axios.get('/ViewCourses').then((res)=>{
            setstate(res.data);
        })
    },[])
 
  return (
    <div>
        <div className='headingSC'>
            <h2>All Courses</h2>
            <p>Select any course to view relevent quizzes</p>
        </div>
        <div className='parentShowCourses'>
            {
                state.map((m)=>{
                    return <Link to={`/ShowQuizzes/${m.course}`}><div className='childShowCourses'>{m.course}</div></Link> 
                })
            }
        </div>
    </div>
  )
}
