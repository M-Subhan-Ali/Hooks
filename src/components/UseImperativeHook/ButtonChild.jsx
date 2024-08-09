import React, { forwardRef, useImperativeHandle, useState } from 'react'

const ButtonChild =forwardRef((props,ref) => {
    const [toggle,setToggle]=useState(false);
    useImperativeHandle(ref,()=>({
        subhanToggle(){
            setToggle(!toggle);
        }
    }))
   
  return (
    <div>
      <button>Child Button</button>
     {toggle && <h1>Toggle the Content</h1>}
    </div>
  )
})

export default ButtonChild


