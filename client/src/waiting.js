import React from 'react'
import { useParams } from 'react-router-dom'
export default function Waiting() {
    const{data}=useParams()
  return (
    <div style={{padding:'30px'}}>
        <div style={{margin:'50px auto',width:'fit-content',textAlign:'center',textTransform:'capitalize'}}>
                <h2>Your Request for Registration is under review</h2>
                <p>for further details please send Email to : contactmedxam@gmail.com</p>
                <p>After the Approvel of your Registration Admin Will send You Welcoming Message</p>
                <p style={{color:'red'}}>Note: please use Your provided Email Address : <span style={{fontWeight:'bolder',textDecoration:'underline'}}>{data}</span> for further communucation</p>
        </div>
    </div>
  )
}
