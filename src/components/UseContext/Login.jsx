import React, { useContext } from 'react'

import { AppContext } from './UseContext';
 
const Login = () => {
const {setData}=useContext(AppContext);
  return (
    <div>
      <input onChange={(event)=>{
      setData(event.target.value); 
      }} type="text" placeholder='...'  />
    </div>
  )
}

export default Login
