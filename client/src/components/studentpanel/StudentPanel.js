import React from 'react'
import './StudentPanel.css'
import storeData from '../../store/store'
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux'
import MyQuizzes from './MyQuizzes';
import Result from './Result';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom'
import EditProfile from './EditProfile';
import ShowCourses from './ShowCourses'
import TakeQuizz from './TakeQuizz';
import ShowResult from './ShowResult'
export default function StudentPanel() {
  let navigate=useNavigate()
  let store=useSelector((s)=>{
    return s.renderComponent
})

function handleComponent(e)
{
  let c=e;
  storeData.dispatch({
    type:'renderComponent',
    c
  })
}
  function renderComponent()
  {
    if(store.c==='myquizzes')
    {
      return < ShowCourses/>  
    }
    else if(store.c==='result')
    {
      return < Result />
    }
    else if(store.c==='profile')
    {
      return < Profile />
    }
    else if(store.c==='editStudentProfile')
    {
      return < EditProfile />
    }
    else if(store.type==='takequizz')
    {
      return < TakeQuizz data={store.c} />
    }
    else if(store.type==='showresult')
    {
      return < ShowResult data={store.c} />
    }
    else if(store.type==='showreleventquizz')
    {
      return < MyQuizzes data={store.c} />
    }
    else{

      return < ShowCourses/>
    }
  }

  return (
    <>
    <div>
<Grid container className='studentNav'>
<Grid item xs={12} md={3}>
<button onClick={(()=>{
  handleComponent('myquizzes')
})}> My Quizzes</button>
</Grid>
<Grid item xs={12} md={3}>
<button onClick={(()=>{
  handleComponent('result')
})}>Result</button>
</Grid>
<Grid item xs={12} md={3}>
<button onClick={(()=>{
  handleComponent('profile')
})}>Profile</button>
</Grid>
<Grid item xs={12} md={3}>
<button onClick={(()=>{
   alert('signout successfully');
   localStorage.removeItem('studentlogin');
   navigate('/')
})}> Sign-Out </button>
</Grid>
</Grid>
    </div>

  <div className='renderC'>
   {
     renderComponent()
   }
    </div>  
    </>
  )
}
