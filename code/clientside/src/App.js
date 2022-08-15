import React from 'react'
import SignIn from './components/signin'
import Header from './components/header/header'
import { Route,Routes } from 'react-router-dom'
import Homepage from './components/homepage/homepage'
import Contactus from './components/contactus/Contactus'
import Footer from './components/Footer/Footer'
import HowToPay from './components/howtopay/howtopay'
import StudentPanel from './components/studentpanel/StudentPanel'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import Instructions from './components/instructions'
import Quizzes from './components/Quizzes';
import ShowQuizzes from './components/Admin/ShowQuizzes';
import Waiting from './waiting';
import SignUp from './components/signup';
export default function App() {


  
  return (
    <div>
<Header key={'head'}/>
  <Routes>
  <Route path='/' element={<Homepage key={'homepage'} />} />
  <Route path='/Home' element={<Homepage key={'homepage'} />} />
  <Route path='/Contact-Us' element={<Contactus key={'Contactus'} />} />
  <Route path='/How-to-Pay' element={<HowToPay key={'HowToPay'} />} />
  <Route path='/Sign-in' element={<SignIn key={'SignIn'} /> } />
  <Route path='/Quizzes' element={<Quizzes/> } />
  <Route path='/signup' element={<SignUp/> } />
  <Route path='/waiting/:data' element={<Waiting/> } />
   <Route path='/dashboard' element={<Dashboard key={'dashboard'} /> } /> 
   <Route path='/studentpanel' element={<StudentPanel key={'studentpanel'} /> }/> 
     <Route path='/instructions/:data' element={<Instructions /> } />   
     <Route path='/ShowQuizzes/:data' element={<ShowQuizzes /> } />  
      </Routes>
      <Footer key={'foot'}></Footer>

    </div>
  )
}

