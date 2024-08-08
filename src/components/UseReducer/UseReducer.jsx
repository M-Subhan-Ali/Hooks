import React, { useReducer } from 'react'

const initialState={
    count:0,
    text:false,
    changeColor:false
}

const reducer=(state,action)=>{
    switch(action.type){
     
        case "INCREMENT":
            return{
                ...state,
                count:state.count+1
        }
        case "TEXT":
            return{
                ...state,
                text:!state.text
            }
            case"COLOR":
            return{
                ...state,
                changeColor:!state.changeColor
            }

    }

}


const UseReducer = () => {

    const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div className="" style={{backgroundColor:state.changeColor ? "red":"white" ,width:"100vw",height:"100vh"}}>
    <div style={{display:"grid",justifyItems:"center"}}>
      <h1 style={{fontSize:"40px"}}>{state.count}</h1>
      <button 
      onClick={()=>{
        dispatch({type:"INCREMENT"});
        dispatch({type:"TEXT"});
        dispatch({type:"COLOR"});
      }}
      style={{fontSize:"20px"}}>click me</button>
    {state.text &&  <p style={{fontSize:"20px",border:"2px solid red",padding:"5px"}}>show text</p>}
    </div>
    </div>
  )
}

export default UseReducer
