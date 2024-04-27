import React , {useState,useEffect} from "react";
import "./style.css";

const UseEffect = () => {
    // inititalData = 10;
    const [myNum, setMyNum] = useState(0);

   useEffect(() =>{
        document.title = `Chats(${myNum})`;
    })

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button" onClick={() => setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
      </div>
    </>
  )
}

export default UseEffect
