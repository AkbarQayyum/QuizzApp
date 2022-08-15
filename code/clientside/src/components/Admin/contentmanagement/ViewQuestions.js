import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import storeData from '../../../store/store.js'
import Grid from '@mui/material/Grid';
export default function ViewQuestions(props) {
    let obj={
        id:props.data,
    }
    let [questions,setquestions]=useState([{}])
    useEffect(()=>{
        axios.post('/getquestions',obj).then((res)=>{
            setquestions(res.data);
        })
    },[])
  return (
    <div>
     <Grid container>
        {
            questions.map((q,i)=>{
                return <Grid container sx={{textAlign:'center',fontWeight:'bold',padding:'10px',margin:'10px auto',borderBottom:'4px solid rgba(210,210,210,0.9)'}}>
                    <Grid item xs={12} md={12} sx={{boxShadow:'0px 0px 2px 2px rgba(210,210,210,0.8)'}}>
                        Question#{i+1} Statement : {q.QuestionStatement}
                    </Grid>
                    <Grid item xs={6} md={3} sx={{boxShadow:'0px 0px 2px 2px rgba(210,210,210,0.8)'}}>
                        Option A : {q.OptionA}
                    </Grid>
                    <Grid item xs={6} md={3} sx={{boxShadow:'0px 0px 2px 2px rgba(210,210,210,0.8)'}}>
                        Option B : {q.OptionB}
                    </Grid>
                    <Grid item xs={6} md={3} sx={{boxShadow:'0px 0px 2px 2px rgba(210,210,210,0.8)'}}>
                        Option C : {q.OptionC}
                    </Grid>
                    <Grid item xs={6} md={3} sx={{boxShadow:'0px 0px 2px 2px rgba(210,210,210,0.8)'}}>
                        Option D : {q.OptionD}
                    </Grid>
                    
                    <Grid item xs={12} md={12} sx={{boxShadow:'0px 0px 2px 2px rgba(210,210,210,0.8)'}}>
                        Answer : {q.answer}
                    </Grid>
                    <Grid item xs={12} md={12} sx={{boxShadow:'0px 0px 2px 2px rgba(210,210,210,0.8)'}}>
                        <button className='button' onClick={(()=>{
                            storeData.dispatch({
                                type:'editquestion',
                                c:{questions:q,quizzID:props.data,questionIndex:i,}
                            })
                        })}>Edit</button>
                    </Grid>
                </Grid>
            })
        }
     </Grid>
    </div>
  )
}
