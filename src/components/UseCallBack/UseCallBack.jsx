import React, { useCallback, useState } from 'react'
import Childs from './Childs';

const UseCallBack = () => {    //UseCallBack is similar to USeMemo but the Differnce is that useCallback take the functions as an argumenst 
    const [data,setData]=useState("Hello,i am LEarning UseMEmo Hook");
    const [toggle,setToggle]=useState(false);

    const FunctionOfData=useCallback((name)=>{
     return data+name;
    },[data])
  return (
    <div>
      <Childs  FunctionOfData={FunctionOfData} />
      <div>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>}
      </div>

    </div>
  )
}

export default UseCallBack
