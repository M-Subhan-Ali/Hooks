import React, { useContext } from 'react'

import { AppContext } from './UseContext';

const User = () => {
    const {data}=useContext(AppContext);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default User
