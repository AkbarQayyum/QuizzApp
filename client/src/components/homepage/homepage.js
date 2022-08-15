import React,{useEffect,useState} from 'react'
import './homepage.css'
import WelcomeHome from './WelcomeHome'
import 'pure-react-carousel/dist/react-carousel.es.css';
export default function Homepage() {
  let [state,setstate]=useState('')
  useEffect(()=>{
    setInterval(() => {
      if(window.innerWidth<=600)
      {
        setstate('vertical')
      }
      else{
        setstate('horizontal')
      }
    }, 1000);
  },[])
  
  return (
    <>
    <WelcomeHome />
   
    <div className='videos'>
          About Us
        </div>
        <div style={{textAlign:'center'}}>
          <img style={{width:'60%',margin:'10px auto',borderRadius:'0px 0px 30% 30%',boxShadow:'0px 0px 5px 5px rgba(210,210,210,0.9)'}} alt='' src='about.png' />
       <h3>MEDXAM HealthCare Professionals</h3>
       <p style={{width:'60%',margin:'10px auto',fontWeight:'bold',color:'gray'}}>The Ultimate Guide for Medical Examination Preparation in Pakistan
Everything you need for preparation of FCPS is now in one place. Access
the most authentic collection of practice MCQs with a user-friendly
experience. Content for MS and MCAT shall be added soon in later
versions.</p>
        </div>
       <hr style={{width:'80%',margin:'10px auto',height:'5px',border:'none'}}/>
    </>
  )
}
