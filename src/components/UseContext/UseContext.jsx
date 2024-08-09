import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const AppContext=createContext();

const UseContext = () => {    //Used For using states into Componenets Without Passing Props in every Components 
    const [data,setData]=useState("");
  return (
    <AppContext.Provider value={{data,setData}} >
    <div style={{display:"grid",justifyContent:"center",paddingTop:"30px"}}>
      <Login/>
      <User/>
    </div>
    </AppContext.Provider>
  )
}

export default UseContext
