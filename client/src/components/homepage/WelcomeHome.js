import { Grid } from '@mui/material'
import React from 'react'
import "./homepage.css"


export default function WelcomeHome() {
  return (
    <div>
        <Grid container spaceing={2} sx={{textAlign:'center',margin:'20px auto',justifyContent:"space-evenly",boxShadow:'0px 0px 6px 8px rgba(210,210,210,0.5)'}}>
      
      <Grid item xs={12} md={6} sx={{padding:"20px",position:'relative'}} > 
<img alt="" style={{width:"60%",borderRadius:'10px',borderBottom:'3px solid rgba(0,0,0,0.2)',borderRight:'4px solid rgba(0,0,0,0.2)'}} src='logo.png' />
</Grid>

<Grid item xs={12} md={6} sx={{padding:"10px"}}>
        <div className="welcomehome" style={{marginTop:"15%",textAlign:'justify'}}>
            <h1>Welcome.!!</h1>
            <h2>MEDXAM HealthCare Professional</h2>
           <p>Our mission is to improve patient care with comprehensive clinical information and resources  essential to physicians and healthcare professionals. To provide the guideline for preparation of regional and international licencing exams addressing the knowledge, attitude and practice domains keeping in view the essence of medical education.</p>
                   </div>
</Grid>

        </Grid>
    </div>
  )
}
