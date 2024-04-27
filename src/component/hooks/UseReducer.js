import React, { useReducer } from "react";
import "./style.css";

const reducer = (state,action) => {
    if(action.type === "INCR"){
        state = state+1;
    }
    
    if(state>0 && action.type === "DECR")
    state = state - 1;

    return state;
};
const UseReducer = () => {
  
    // const [myNum, setMyNum] = React.useState(25)
     const initialData = 10; 
    const [state, dispatch] = useReducer(reducer,initialData);
  return (
    <>
    <p>{state}</p>
      <div className="center_div">
        
        <div class="button" onClick={() => dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div class="button" onClick={() => dispatch({type:"DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
      </div>
    </>
  )
}

export default UseReducer;
