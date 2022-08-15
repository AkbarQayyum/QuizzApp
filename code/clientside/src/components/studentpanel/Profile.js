import React  from 'react'
import Grid from '@mui/material/Grid';
import './StudentPanel.css'
import axios from 'axios';
import storeData from '../../store/store';
export default function Profile() {
    let obj=JSON.parse(localStorage.getItem('studentlogin'));
    let id={id:obj[0]._id}
    let profile=obj[0].profile;
    let [founduser,setfounduser]=React.useState({});
    React.useEffect(()=>{
        axios.post('/foundedituser',id).then((res)=>{
            setfounduser(res.data);
            
        })
       
    },[])

  return (
    <div>
        <Grid container className='parentstudentprofile'>
                <Grid item xs={12} md={5} className='childstudentprofile' sx={{textAlign:'center'}}>
                    <img style={{width:'60%'}} alt='' src={profile} />
                </Grid>
                <Grid item xs={12} md={5} sx={{padding:'10px',boxShadow:'0px 0px 2px 3px rgba(210, 210, 210, 0.8)'}}>
                    <Grid item xs={12} className='childstudentprofile'>
                        <span>First Name :</span> {founduser.firstname}
                    </Grid>
                    <Grid item xs={12} className='childstudentprofile'>
                        <span>Last Name :</span> {founduser.lastname}
                    </Grid>
                    <Grid item xs={12}  className='childstudentprofile'>
                        <span>User Name :</span> {founduser.username}
                    </Grid>
                    <Grid item xs={12} className='childstudentprofile'>
                        <span>Email :</span> {founduser.email}
                    </Grid>
                    <Grid item xs={12}  className='childstudentprofile'>
                        <span>Phone :</span> {founduser.phone}
                    </Grid>
                    <Grid item xs={12}  className='childstudentprofile'>
                        <span>Password :</span> {founduser.password}
                    </Grid>

                </Grid>
                <Grid item xs={12} md={12} sx={{textAlign:'center'}}>
                    <button onClick={(()=>{
                        storeData.dispatch({
                            type:"renderComponent",
                            c:'editStudentProfile',
                        })
                    })}  className='bt'>Edit Profile</button>
                </Grid>
        </Grid>
    </div>
  )
}
