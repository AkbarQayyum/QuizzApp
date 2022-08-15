import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'
export default function Card(props) {
  return (
    <div>
      <div className="mainDiv">
        <div className='upperDiv'>
          <img alt='' style={{width:'40%',margin:'10px auto'}} src='addvideo.png' />
        </div>
        <hr/>
        <div className='lowerdiv'>
          <p>{props.data.name}</p>
          <p><Link to={`/watchvideo/${props.data.name}`}><button className='btn'>Watch Video</button></Link></p>
        </div>
      </div>
    </div>
  )
}
