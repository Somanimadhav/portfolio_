import React from "react";
import "./style.css";

const UseState = () => {
    // inititalData = 10;
    const [myNum, setMyNum] = React.useState(25)
  return (
    <>
    <p>{myNum}</p>
      <div className="center_div">
        
        <div class="button" onClick={() => setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div class="button" onClick={() => (myNum>0 ? setMyNum(myNum-1) : setMyNum(0))}>
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

export default UseState;
