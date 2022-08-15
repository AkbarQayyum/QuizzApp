import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export default function ShowQuizzes() {
  let [quizz,setquizz]=useState([{}])
  const {data}=useParams();
  function Getdata(){
    let obj={courseName:data}
    useEffect(()=>{
        axios.post('/showquizz',obj).then((res)=>{
            setquizz(res.data)
        })
        
    },[])
    
      
  }
  Getdata()

  
    return (
    <div style={{margin:'10px auto'}}>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',padding:'20px'}}>
            {
                quizz.map((m)=>{
                    return <div style={{boxShadow:'0px 0px 5px 5px rgba(210,210,210,0.8)',padding:'20px',textAlign:'center',width:'300px'}}>
                        <h3>Quizz ID : {m._id}</h3>
                        <h4>Course : {m.course}</h4>
                        <p>Course Discription : {m.CourseDis}</p>
                        <p>level Difficulty : {m.level}</p>
                        <p>Quizz Type: {m.quizztype}</p>
                        <p>Price : {m.price}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}
