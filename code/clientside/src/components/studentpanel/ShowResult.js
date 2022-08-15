import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './StudentPanel.css'
import { Grid } from '@mui/material';
export default function ShowResult(props) {
    let avgtotalscore=(33/100)*props.data.totalscore;
    let [msg,setmsg]=useState('');    
    let date=Date();
    let marksavg=(props.data.obtainedscore/props.data.totalscore)*100;
    let obj=JSON.parse(localStorage.getItem('studentlogin'));
    let id=obj[0]._id
    let data={
      "userID":id,
      "quizzID":props.data.quizzID,
      "totalMarks":props.data.totalscore,
      "obtainedMarks":props.data.obtainedscore,
      "correctQuestions":props.data.Correct,
      "wrongQuestions":props.data.Wrong,
      "marksAvg":marksavg,
      "date":date,
    }
   useEffect(()=>{
    if(props.data.obtainedscore>=avgtotalscore)
    {
      setmsg('Congratulation You Are Passed')
    }
    else
    {
      setmsg('Opps You Are Fail')
    }
axios.post('/checkresult',data).then((res)=>{
  if(res.data)
  {
    alert('Quizz Already Taken at '+res.data[0].date);
  }
})
   },[])
    
  return (
    <div>
      <div className='detailTakeQuizz'>
        Quizz Result
      </div>

    <div className='showresult'>

      <Grid container className='showresultcontainer'>
        <Grid item className='childsshowresul' xs={12}>
          <div className='showresultimg'>
          {props.data.obtainedscore>=avgtotalscore?<img  alt='' src="happy.png" />:<img  alt='' src="sad.png" />}
          </div>
        </Grid>
        <Grid className='childsshowresul' item xs={12}>
        <h2>{msg}</h2>
        </Grid>
        <Grid container className='showresultcontainer'>

          <Grid item className='childsshowresul' xs={12} md={4}>
              Quizz ID : 
          </Grid>
          
          <Grid item className='childsshowresul' xs={12} md={4}>
            {props.data.quizzID}
          </Grid>
        </Grid>

        <Grid container className='showresultcontainer'>

<Grid item className='childsshowresul' xs={12} md={4}>
Total Marks : 
</Grid>

<Grid item className='childsshowresul' xs={12} md={4}>
{props.data.totalscore}
</Grid>
</Grid>


      <Grid container className='showresultcontainer'>

          <Grid item className='childsshowresul' xs={12} md={4}>
            Obtained Marks : 
          </Grid>
          
          <Grid item className='childsshowresul' xs={12} md={4}>
            {props.data.obtainedscore}
          </Grid>
      </Grid>

      
      <Grid container className='showresultcontainer'>

          <Grid item className='childsshowresul' xs={12} md={4}>
            Correct Questions : 
          </Grid>
          
          <Grid item className='childsshowresul' xs={12} md={4}>
            {props.data.Correct}
          </Grid>
      </Grid>

      
      <Grid container className='showresultcontainer'>

          <Grid item className='childsshowresul' xs={12} md={4}>
            Wrong Questions : 
          </Grid>
          
          <Grid item className='childsshowresul' xs={12} md={4}>
            {props.data.Wrong}
          </Grid>
      </Grid>

      
      <Grid container className='showresultcontainer'>

          <Grid item className='childsshowresul' xs={12} md={4}>
            Obtained Marks Average : 
          </Grid>
          
          <Grid item className='childsshowresul' xs={12} md={4}>
            {marksavg} %
          </Grid>
      </Grid>
      </Grid>
<div style={{margin:'20px auto',textAlign:'center'}}>
  <h2>Details</h2>
<table colomSpacing={10} cellSpacing={10} style={{padding:'15px',margin:'10px auto'}}>
  <thead style={{fontWeight:'bolder'}}>
      <td>Question Number</td>
      <td>Correct Answer</td>
      <td>Selected Option</td>
  </thead>
  <tbody>
    {
      props.data.history.map((m,i)=>{
        if(i!==0)
        {
          return <tr >
          <td>{m.questionnumber+1}</td>
          <td>{m.ans}</td>
          <td className={m.ans===m.selectedOption?'green':'red'}>{m.selectedOption}</td>
        </tr>
        }
        
      })
    }
  </tbody>
</table>
</div>
    </div>
    </div>
  )
}
