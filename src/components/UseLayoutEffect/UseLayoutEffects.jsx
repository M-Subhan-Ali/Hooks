import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffects = () => {        //useLayOutEffect always render before the useEffect
    const entry=useRef();

    useLayoutEffect(()=>{
        // console.log("UseLayoutEffect");
        console.log(entry.current.value);
    },[]);

    useEffect(()=>{
    // console.log("UseEffect");
    entry.current.value="Tokyo"
    },[]);

  return (
    <div>
      <input value="Berlin"  ref={entry}  type="text"  style={{fontSize:"50px"}} />
    </div>
  )
}

export default UseLayoutEffects
