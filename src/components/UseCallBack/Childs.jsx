import React, { useEffect } from 'react'

const Childs = ({FunctionOfData}) => {

    useEffect(()=>{
     console.log("Function Was Called");
    },[FunctionOfData])

  return (
    <div>
      <h1>{FunctionOfData(" Subhan")}</h1>
    </div>
  )
}

export default Childs
