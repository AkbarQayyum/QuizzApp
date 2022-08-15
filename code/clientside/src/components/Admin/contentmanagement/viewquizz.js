import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import storeData from '../../../store/store.js'
export default function ViewQuizz(props) {
  let [quizz,setquizz]=useState([{}])
  function Getdata(){
    let obj={courseName:props.data}
    axios.post('/showquizz',obj).then((res)=>{
        setquizz(res.data)
    })

      
  }
  Getdata()

  function Deletequizz(e){
      let obj={
          id:e,
      }
     
        axios.post('deletequizz',obj).then((res)=>{
            alert('quizz has been deleted..!!');
        Getdata()
        })
     
  }
    return (
    <div style={{margin:'10px auto'}}>
       <Grid container sx={{padding:'10px'}}>
        {
            quizz.map((q)=>{
        
             return <div key={q._id}> <Grid container sx={{textAlign:'center',margin:'10px auto',fontWeight:'bold',color:'rgb(18, 95, 91)',border:'2px solid rgba(210,210,210,0.9)',padding:'10px'}}>
             <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Quizz_ID : {q._id}
                    </Grid>
                    <Grid item md={3} xs={4} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Course Name : {q.course}
                    </Grid>
                    <Grid item md={3} xs={4} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Course Discription : {q.CourseDis}
                    </Grid>
                    <Grid item md={3} xs={4} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Type : {q.quizztype}
                    </Grid>
                    <Grid item md={3} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   level:  {q.level}
                    </Grid>
                    <Grid item md={4} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   price : {q.price}
                    </Grid>
                    <Grid item md={4} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Teacher Name : {q.TeacherName}
                    </Grid>
                    <Grid item md={4} xs={6} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Discription : {q.TeacherDiscription}
                    </Grid>
                    <Grid item md={6} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                <button className='button' onClick={(()=>{
                    Deletequizz(q._id)
                })}>Delete</button>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                <button className='button' onClick={(()=>{
                    storeData.dispatch({
                        type:'viewquestions',
                        c:q._id
                    })
                })}>View Questions</button>
                    </Grid>
                    </Grid>

                    </div>
               
            })
        }
        </Grid>
    </div>
  )
}
