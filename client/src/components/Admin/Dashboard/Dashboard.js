
import React from 'react'
import ContentManagement from '../contentmanagement/ContentManagement'
import UserManagement from '../user management/UserManagement'
import './Dashboard.css'
import {Fade,Zoom,Slide} from 'react-awesome-reveal'
import { useSelector } from 'react-redux'
import storeData from '../../../store/store'
import Viewuser from '../user management/viewuser'
import AddUser from '../user management/adduser'
import Welcome from './Welcome'
import CreateContent from '../contentmanagement/createContent'
import ViewContent from '../contentmanagement/viewContent'
import CreateQuizz from '../contentmanagement/CreateQuizz'
import Addvideo from '../contentmanagement/Addvideo'
import EditUser from '../user management/edituser'
import { useNavigate } from 'react-router-dom'
import ViewQuizz from '../contentmanagement/viewquizz'
import ViewQuestions from './../contentmanagement/ViewQuestions';
import AssignQuizz from '../user management/AssignQuizz'
import CourseManagement from '../Course Management/CourseManagement'
import AddCourse from './../Course Management/AddCourse';
import ViewCourse from './../Course Management/ViewCourse';
import EditQuestion from './../contentmanagement/editquestion';
import ShowCourses from './../contentmanagement/showCourse';
export default function Dashboard() {
    let navigate=useNavigate()
    let obj=JSON.parse(localStorage.getItem('adminlogin'))
    let profile=obj[0].profile;
    if(!localStorage.getItem('adminlogin'))
    {
        navigate('/')
    }  
let store=useSelector((s)=>{
    return s.renderComponent
})



    function handleMenu(Event)
    {
    let c=Event.target.value;
     storeData.dispatch({
         type:"renderComponent",
         c,
     })
    }
  
    function renderComponent(e)
    {
        if(store.c==="viewUser")
        {
            return <Zoom><Viewuser /></Zoom>
        }
       else if(store.c==='adduser')
        {
            return <Zoom><AddUser /></Zoom>
        }
        else if(store.c==='adduser')
        {
            return <Zoom><AddUser /></Zoom>
        }
        else if(store.c==='CreateContent')
        {
            return <Zoom><CreateContent /></Zoom>
        }
        else if(store.c==='ViewQuizz')
        {
            return <Zoom><ShowCourses /></Zoom>
        }
        else if(store.type==='showreleventquizz')
        {
            return <Zoom><ViewQuizz data={store.c} /></Zoom>
        }
        else if(store.c==="CreateQuizz")
        {
            return <Zoom><CreateQuizz/></Zoom>
        }
        else if(store.c==="Addvideo")
        {
            return <Fade><Addvideo/></Fade>
        }
        else if(store.c==='ViewContent')
        {
            return <Zoom><ViewContent /></Zoom>
        }
        else if(store.type==='edit')
        {
            return <Zoom><EditUser data={store.c} /></Zoom>
        }
        else if(store.type==='assignquizz')
        {
            return <Zoom><AssignQuizz data={store.c} /></Zoom>
        }
        
        else if(store.type==='viewquestions')
        {
            return <Zoom><ViewQuestions data={store.c} /></Zoom>
        }
       else if(store.c==="Dashboard")
        {
            return <Fade delay={1000}><Welcome /></Fade>
        }
        else if(store.c==="User Management")
        {
            return <Fade ><UserManagement /></Fade>
        }
        else if(store.c==="Content Management")
        {
            return <Zoom><ContentManagement/></Zoom>
        }
        else if(store.c==="Course Management")
        {
            return <Zoom><CourseManagement/></Zoom>
        }
        else if(store.c==="AddCourse")
        {
            return <Zoom><AddCourse/></Zoom>
        }  else if(store.c==="ViewCourse")
        {
            return <Zoom><ViewCourse/></Zoom>
        }
        else if(store.type==="editquestion")
        {
            return <Zoom><EditQuestion data={store.c}/></Zoom>
        }
        else{
            return <Zoom ><Welcome /></Zoom>
        }
    }
  return (
      <>
    
    <div className='MainadminPanel'>
  
     <div className='adminpanel'>
         <img alt='' src={profile} />
            <Slide direction='left' delay={900}><button  onClick={handleMenu} value={"Dashboard"}>Dashboard</button></Slide>
            <Slide direction='left' delay={1000}><button onClick={handleMenu} value={"User Management"}>User Management</button></Slide>
            <Slide direction='left' delay={1100}><button onClick={handleMenu} value={"Content Management"}>Content Management</button></Slide>
            <Slide direction='left' delay={1200}><button onClick={handleMenu} value={"Course Management"}>Course Management</button></Slide>
            <Slide direction='left' delay={1300}><button onClick={(()=>{
               alert('Sign-Out successfully');
               localStorage.removeItem('adminlogin');
               navigate('/')
            })} value={"signout"}>Sign-Out</button></Slide>
        </div>
    
        <div className='renderC'>
 {
     renderComponent()
 }
        </div>
      
    </div>
   
    </>   
  )
}
