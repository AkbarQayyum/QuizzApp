import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import storeData from '../../store/store.js'
export default function MyQuizzes(props) {
  let obj=JSON.parse(localStorage.getItem('studentlogin'));
let id={id:obj[0]._id,cname:props.data}
  let [quizz,setquizz]=useState([])
 

 function Getquizz()
 {
  useEffect(()=>{
    let array=[];

    axios.post('myassignquizz',id).then((res)=>{
      res.data.map((r)=>{
        axios.post('getmyquizzdata',{id:r.QuizzID}).then((result)=>{
          let data=result.data;
         array=[...array,data]
         setquizz(array)
        })
        
      })
      
      
    })
    
  },[]) 
 
    
  }
Getquizz()

  return (
    <div style={{margin:'10px auto'}}>
      <h1 style={{textAlign:'center',color:'rgb(18, 95, 91)'}}>MY QUIZZES</h1>
      <hr style={{width:'80%',margin:'5px auto'}} />
    <Grid container >
        {
          quizz.map((q)=>{
            return <div style={{width:'100%'}} key={q._id}>
            <Grid key={q._id} container sx={{textAlign:'center',margin:'10px auto',fontWeight:'bold',color:'rgb(18, 95, 91)',border:'2px solid rgba(210,210,210,0.9)',padding:'10px'}}>
             <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Quizz_ID : {q._id}
                    </Grid>
                    <Grid item md={4} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Course Name : {q.course}
                    </Grid>
                    <Grid item md={4} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Course Discription : {q.CourseDis}
                    </Grid>
                    <Grid item md={4} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Type : {q.quizztype}
                    </Grid>
                    <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)',padding:'10px'}}>
                   level defficulty:  {q.level}
                    </Grid>
                  
                 
                  
                    <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                <button className='bt' style={{padding:'10px',margin:'10px auto',fontWeight:'bolder'}} onClick={(()=>{
                    storeData.dispatch({
                        type:'takequizz',
                        c:q,
                    })
                })}>Take Quizz</button>
                    </Grid>
                    </Grid>

            </div>
          })
        }
        </Grid>
    </div>
  )
}
