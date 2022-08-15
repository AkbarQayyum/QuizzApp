import React from 'react'
import '../user management/UserManagement.css'
import storeData from '../../../store/store'
export default function ContentManagement() {
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
      <div className='heading'>User Management</div>
      <hr />
      <div className='users'>
       
     <div  className='child1'>
          <img alt='' src='viewcontent.png' />
          <button className='button' onClick={handleUser} value={'ViewContent'}>View Content</button>
        </div>
         <div className='child2'>
          <img alt='' src='createcontent.png' />
         <button className='button' onClick={handleUser} value={'CreateContent'}>Create Content</button>
        </div>
    
      </div>
    </div>
  )
}
