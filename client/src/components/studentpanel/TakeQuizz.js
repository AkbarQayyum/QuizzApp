import React from 'react'
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import './StudentPanel.css'
import storeData from '../../store/store';


export default function TakeQuizz(props) {
  let [state,setstate]=useState(props.data.questions)
  let [index,setindex]=useState(0);
  let [option,setoption]=useState('');
  let [correct,setcorrect]=useState(0);
  let [wrong,setwrong]=useState(0);
  let [history,sethistory]=useState([]);
  let totalscore=((props.data.questions.length)*10)
  function sendhistory(ans){
sethistory([...history,ans])
  }
  function checkresult(ans){
  if(ans.ans===ans.selectedOption)
  {
    setcorrect(++correct);
  }
  else{
  
    setwrong(++wrong);
    
  }
  

}  
function showResult()
{
  const obj={
    quizzID:props.data._id,
    totalscore:totalscore,
    Correct:correct,
    Wrong:wrong,
    obtainedscore:correct*10,
    history:history,
  }
  storeData.dispatch({
    type:'showresult',
    c:obj,
  })
}
function resetoptions(){
  document.querySelector('input[name="option"]:checked').checked = false;
   
}
  function nextQuestion(ans)
  {
    
    index=index+1;
    if(index<=props.data.questions.length-1)
    {
    setindex(index)
    }
    else
    {
     
      showResult()
    }
  
  }
  function filter(){
    if(index===0)
    {
      sendhistory({ans:state[index].answer,selectedOption:option,questionnumber:index})
    }
    var checkRadio = document.querySelector(
      'input[name="option"]:checked');
    
    if(checkRadio!=null)
    {
    
      checkresult({ans:state[index].answer,selectedOption:option,questionnumber:index})
      resetoptions(); 
      nextQuestion({ans:state[index].answer,selectedOption:option,questionnumber:index})
    }
    else
    {
      alert('please select an option to move next');
    }
  }
  return (
    <>
    <div>
      <div className='detailTakeQuizz'>Quizz Details</div>
    <Grid key={props.data._id} container sx={{textAlign:'center',backgroundColor:'rgba(180,180,10,0.1)',margin:'20px auto',fontWeight:'bold',color:'rgb(18, 95, 91)',border:'2px solid rgba(210,210,210,0.9)',padding:'10px'}}>
             <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)',padding:'20px'}}>
                   Quizz_ID : {props.data._id}
                    </Grid>
                    <Grid item md={4} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Course Name : {props.data.course}
                    </Grid>
                    <Grid item md={4} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Course Discription : {props.data.CourseDis}
                    </Grid>
                    <Grid item md={4} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                    Type : {props.data.quizztype}
                    </Grid>
                    <Grid item md={12} xs={12} sx={{boxShadow:'0px 0px 3px 3px rgba(210,210,210,0.3)'}}>
                   Level Difficulty :  {props.data.level}
                    </Grid>
               
                  
                   
                    </Grid>

    </div>
    <div className='detailTakeQuizz'>Questions</div>
  
    <div style={{width:'100%',margin:'10px auto'}}>
      <Grid container className='mainTakeQuizz'>
        <Grid item xs={12} sx={{textAlign:'center'}}>
        {state[index].QuestionStatement}
        </Grid>
      <Grid container  className='mainTakeQuizz' >
      
      <Grid item xs={12} md={6} className='Options'>
        <input type='radio' onChange={(()=>{setoption(state[index].OptionA);sendhistory({ans:state[index].answer,selectedOption:state[index].OptionA,questionnumber:index})})} name='option' value={state[index].OptionA} />
        {state[index].OptionA} 
      </Grid>

      <Grid item xs={12} md={6} className='Options'>
        <input type='radio' onChange={(()=>{setoption(state[index].OptionB);sendhistory({ans:state[index].answer,selectedOption:state[index].OptionB,questionnumber:index})})} name='option' value={state[index].OptionB} />
        {state[index].OptionB} 
      </Grid>

      <Grid item xs={12} md={6} className='Options'>
        <input type='radio' onChange={(()=>{setoption(state[index].OptionC);sendhistory({ans:state[index].answer,selectedOption:state[index].OptionC,questionnumber:index})})} name='option' value={state[index].OptionC} />
        {state[index].OptionC} 
      </Grid>
      

      <Grid item xs={12} md={6} className='Options'>
        <input type='radio' onChange={(()=>{setoption(state[index].OptionD);sendhistory({ans:state[index].answer,selectedOption:state[index].OptionD,questionnumber:index})})} name='option' value={state[index].OptionD} />
        {state[index].OptionD} 
      </Grid>
      


      </Grid>
         <Grid item xs={12}>
         <button className='bt' onClick={(()=>{
         filter()
    })}>{index<props.data.questions.length-1?'NEXT':'FINISH'}</button>
         </Grid>
      </Grid>
    </div>

    </>
  )
}
