import React from 'react'
import '../user management/UserManagement.css'
import storeData from '../../../store/store'
export default function CreateContent() {
  function handleUser(temp)
  {
   let c=temp.target.value
storeData.dispatch({
  type:"grandChild",
  c,
})
  }
  return (
    <div className='mainUserM'>
      <div className='heading'>Create Content</div>
      <hr />
      <div className='users'>
       
     <div  className='child1'>
          <img alt='' src='addquizz.png' />
          <button className='button' onClick={handleUser} value={'CreateQuizz'}>Add Quizz</button>
        </div>
         <div className='child2'>
          <img alt='' src='addvideo.png' />
         <button className='button' onClick={handleUser} value={'Addvideo'}>Add Video</button>
        </div>
    
      </div>
    </div>
  )
}
