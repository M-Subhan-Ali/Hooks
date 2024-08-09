import React, { useRef } from 'react'
import ButtonChild from './ButtonChild'

const UseImperativeHook = () => {    //useImperative is used to pass the functinality in child component
    const buttonRef=useRef();
  return (
    <div className='' style={{width:"100vw",height:"30vh",display:"grid",justifyContent:"center"}}>
      <div><button onClick={()=>{buttonRef.current.subhanToggle()}} >Parent Button</button></div>
      <ButtonChild ref={buttonRef}/>
    </div>
  )
}

export default UseImperativeHook
