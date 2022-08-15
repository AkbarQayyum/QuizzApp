import React from 'react'
import '../user management/UserManagement.css'
import storeData from '../../../store/store'
export default function ViewContent() {
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
      <div className='heading'>View Content</div>
      <hr />
      <div className='users'>
       
     <div  className='child1'>
          <img alt='' src='addquizz.png' />
          <button className='button' onClick={handleUser} value={'ViewQuizz'}>View Quizzes</button>
        </div>
         <div className='child2'>
          <img alt='' src='addvideo.png' />
         <button className='button' onClick={handleUser} value={'Viewvideo'}>View Videos</button>
        </div>
    
      </div>
    </div>
  )
}
