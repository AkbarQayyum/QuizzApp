import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import { List, ListItem, Typography } from '@mui/material';
import './Footer.css'
export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} sx={{boxShadow:'0px 0px 4px 4px rgba(210,210,210,0.5)',marginTop:"50px"}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid  container item xs={12} md={2}>
            <List sx={{color:"white",textAlign:'left'}}>
                <ListItem className='list'>
                   <Link to={'/Sign-in'}>Sign-In</Link>
                </ListItem>
                <ListItem className='list'>
                <Link to={'/signup'}>Sign-Up</Link>
                </ListItem>
            </List>
        </Grid>
        <Grid  container item xs={12} md={2}>
        <List sx={{color:"white",textAlign:'left'}}>
                <ListItem className='list'>
                    Get Help
                </ListItem>
           
                <ListItem className='list'>
                    Gift card balance
                </ListItem>
                <ListItem className='list'>
                    Contact us
                </ListItem>
            </List>
        </Grid>
        <Grid  container item xs={12} md={2}>
        <List sx={{color:"white",textAlign:'left'}}>
                <ListItem className='list'>
                     About Online Quizz system
                </ListItem>
                <ListItem className='list'>
                    News
                </ListItem>
              
                <ListItem className='list'>
                    Purpose
                </ListItem>
            
            </List>
        </Grid>
        <Grid container item xs={12} md={6} sx={{justifyContent:'right'}}>
            <List>
                <ListItem>
                <img alt='' style={{height:40,marginRight:15}} src='facebook.png' />
                <img alt='' style={{height:40,marginRight:15}} src='twitter.png' />
                <img alt='' style={{height:40,marginRight:15}} src='youtube.png' />
                <img alt='' style={{height:40,marginRight:15}} src='insta.png' />
                </ListItem>
            </List>
        </Grid>
      </Grid>
      <Grid container  spacing={2}>

          <Grid container item xs={12} md={2}>
             <List>
                 <ListItem className='list'>
                     Pakistan
                 </ListItem>
             </List>
          </Grid>
        <Grid container item xs={12} md={4}>
        <List>
                 <ListItem sx={{color:'gray'}}>
                    &copy; 2022 MEDXAM All rights reserved
                 </ListItem>
             </List>
        </Grid>
        <Grid container item xs={12} md={6} sx={{justifyContent:'right'}}>
        <List>
                 <ListItem sx={{color:'gray'}}>
                   <Typography xs={12} sx={{marginRight:5}}>Guides</Typography>
                   <Typography sx={{marginRight:5}}>Term of use</Typography>
                   <Typography sx={{marginRight:5}}>privacy policy</Typography>
                  
                 </ListItem>
             </List>
        </Grid>
      </Grid>
    </Box>
  );
}
