import React from 'react'
import './UserManagement.css'
import storeData from '../../../store/store'
export default function UserManagement() {
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
          <img src='viewuser.png' />
          <button className='button' onClick={handleUser} value={'viewUser'}>View Users</button>
        </div>
         <div className='child2'>
          <img src='adduser.png' />
         <button className='button' onClick={handleUser} value={'adduser'}>Add Users</button>
        </div>
    
      </div>
    </div>
  )
}
