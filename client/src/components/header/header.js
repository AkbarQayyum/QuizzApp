import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MailIcon from '@mui/icons-material/Mail';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './header.css'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
type Anchor = 'top';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
  

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,boxShadow:'0px 0px 4px 4px rgba(210,210,210,0.5)',textAlign:'center'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      <img alt='' style={{width:'90%',margin:'auto'}} src='logo.PNG' />
      <List>
        {['Home', 'Contact-Us', 'How-to-Pay','Quizzes'].map((text, index) => (
        <Link to={'./'+text}>  <ListItem button key={text}>
            <ListItemIcon>
              {index===0 ? <HomeIcon />:index===1 ? <MailIcon />:index===2 ?<AccountBalanceIcon />:index===3?<InboxIcon/>:<OndemandVideoIcon/>}
             
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
        {localStorage.getItem('adminlogin')?<Link to={'/dashboard'}><ListItem button key={'adminlogin'} sx={{marginTop:'10px'}}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Admin Panel</ListItemText>
           </ListItem></Link>:null}
           {localStorage.getItem('studentlogin')?<Link to={'/studentpanel'}><ListItem button key={'studentlogin'} sx={{marginTop:'10px'}}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>Student Panel</ListItemText>
           </ListItem></Link>:null}
      </List>
      <Divider sx={{marginTop:'10px'}} />
      <List>
      {['Sign-in'].map((text, index) => (
         <Link to={'./'+text}>   <ListItem button key={text} sx={{marginTop:'10px'}}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem></Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{boxShadow:'0px 0px 4px 4px rgba(210,210,210,0.5)'}}>
       <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
         <Grid item xs={1} md={2} sx={{textAlign:'center'}}>
      {
        <React.Fragment key={"left"}>
          <Button style={{margin:'10px auto'}} onClick={toggleDrawer("left", true)}><MenuIcon /></Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
           key={'left'}
          >
            
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
     }
     </Grid>
     <Grid item xs={11} md={8} >
     <Typography sx={{margin:'10px auto',color:"rgb(18, 95, 91)",fontSize:"150%",fontWeight:"bolder",textAlign:'center',textShadow:"2px 1px rgba(0,0,0,0.2)"}}>MEDXAM HEALTHCARE</Typography>
     </Grid>
     </Grid>
    </div>
  );
}
