import React from 'react'
import { useParams } from 'react-router-dom'

export default function Instructions() {
    
    const{data}=useParams()
    console.log(data)
  return (
    <div>
        <h3 style={{margin:'20px auto',textAlign:'center'}}>Instructions</h3>
        <hr style={{width:'80%'}}></hr>
        <div style={{width:'50%',margin:"10px auto"}}>
            <h4>Instructions for the Quizz Payment</h4>
            <p>1- Mention your UserName/UserID</p>
            <p>2-Mention Quizz-ID (you can find your related quizz in Quizzes Section)</p>
            <p>3-attatch screenshots of payment proof</p>
            <p>4-send these details through Email/Whatsapp on given Number</p>
            <p>Note: the Quizz will be assigned to you after varification</p>
            <h3>Payment Details</h3>
            {
                data==='bank'?<p>Bank Account# : #################</p>:data==='jazzCash'?<p>JazzCash Number : ###########</p>:data==='easypaisa'?<p>EasyPaisa Number : ##########</p>:<p>Please Varify Payment Method through Admin</p>
            }
        </div>
    </div>
  )
}
