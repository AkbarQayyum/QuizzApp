import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
export default function Result() {
  let obj=JSON.parse(localStorage.getItem('studentlogin'));
  let id={id:obj[0]._id}
  let [state,setstate]=useState([{}])
  useEffect(()=>{
    axios.post('/getmyresult',id).then((res)=>{
      setstate(res.data)
    })
  },[])
  return (
    <div>
 <Grid container >
        {
          state.map((q)=>{
            return <div style={{width:'100%'}} key={q._id}>
            <Grid  container sx={{textAlign:'center',margin:'10px auto',fontWeight:'bold',color:'rgb(18, 95, 91)',border:'2px solid rgba(210,210,210,0.9)',padding:'10px'}}>
             <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Quizz_ID : {q.quizzID}
                    </Grid>
                    <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Taken At : {q.date}
                    </Grid>
                    <Grid item md={3} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Total Marks : {q.totalMarks}
                    </Grid>
                    <Grid item md={3} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Obtained Marks : {q.obtainedMarks}
                    </Grid>
                    <Grid item md={3} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Correct Questions:  {q.correctQuestions}
                    </Grid>
                    <Grid item md={3} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Wrong Questions : {q.wrongQuestions}
                    </Grid>
                    <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Average Marks : {q.marksAvg} %
                    </Grid>
                    
                    </Grid>

            </div>
          })
        }
        </Grid>

    </div>
  )
}
