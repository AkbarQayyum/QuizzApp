import React,{useState,useEffect} from 'react'
import './ContentManagement.css'
import storeData from '../../../store/store';
import axios from 'axios';
export default function ShowCourses() {
    let [state,setstate]=useState([{}])
    useEffect(()=>{
        axios.get('/ViewCourses').then((res)=>{
            setstate(res.data);
        })
    },[])
    function handledata(d){
        storeData.dispatch({
            type:'showreleventquizz',
            c:d,
        })
    }
  return (
    <div>
        <div className='headingSC'>
            <h2>All Courses</h2>
            <p>Select any course to view relevent quizzes</p>
        </div>
        <div className='parentShowCourses'>
            {
                state.map((m)=>{
                    return <div onClick={(()=>{handledata(m.course)})} className='childShowCourses'>{m.course}</div>
                })
            }
        </div>
    </div>
  )
}
