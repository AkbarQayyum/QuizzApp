import React from 'react'
import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'
import './howtopay.css'
export default function HowToPay() {
  return (
    <div>

<Grid container className='mainHowtopay'  >
<Grid item xs={11} md={4}>
    <Link to={`/instructions/${"jazzCash"}`}>
    <Grid container  className='mainHowtopay' className='pad' >
      <Grid xs={4}>01</Grid>
      <Grid xs={4}>JazzCash</Grid>
    </Grid>
    </Link>
    </Grid>


    <Grid item xs={11} md={4}>
    <Link to={`/instructions/${"easypaisa"}`}>
    <Grid container className='mainHowtopay' className='pad' >
      <Grid xs={4}>02</Grid>
      <Grid xs={4}>EasyPaisa</Grid>
    </Grid>
    </Link>
    </Grid>
</Grid>
<Grid container className='mainHowtopay' className='mainHowtopay' >
  <Grid item xs={11} md={4}>
    <Link to={`/instructions/${"bank"}`}>
    <Grid container  className='mainHowtopay' className='pad' >
      <Grid xs={4}>03</Grid>
      <Grid xs={4}>Bank Transfer</Grid>
    </Grid>
    </Link>
    </Grid>
    <Grid item xs={11} md={4}>
    <Link to={`/instructions/${'others'}`}>
    <Grid container  className='mainHowtopay' className='pad' >
      <Grid xs={4}>04</Grid>
      <Grid xs={4}>Others</Grid>
    </Grid>
    </Link>
    </Grid>

</Grid>
        </div>
  )
}
