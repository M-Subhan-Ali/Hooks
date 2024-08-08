import React,{useRef} from 'react'

const UseRef = () => {
    const input=useRef(null);

    const Handler=()=>{
        console.log(input.current.value);
        input.current.focus();
        input.current.value="";
    }
  return (
    <div>
      <h1>Data</h1>
      <input type="text" placeholder='...Ex' ref={input} />
      <button onClick={Handler}>Change Name</button>
    </div>
  )
}

export default UseRef
