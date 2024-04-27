// import React ,{useState} from 'react'
// import "./style.css";
// const Todo = () => {
   
//     const [inputdata,setInputData] = useState("");
//     const[items,setItems] = useState([]);
    

//     const addItem = ()=>{
//         if(!inputdata){
//             alert("Please fill the data");
//         }
//         else{
//             const myNewInputData = {
//                 id:new Date().getTime().toString(),
//                 name: inputdata,
//             }; 
//             setItems([...items,inputdata]);
//             setInputData(""); 
//         }

//     }
// //  how to  delete item section

// const deleteItem =(index) =>{
//     const updatedItems = items.filter((curElem) =>{
//         return curElem.id !== index;
//     })
//     setItems(updatedItems);
// }

//     return (
//     <>
//       <div className="main-div">
//         <div className="child--div">
//             <figure>
//                 <img src="./images/Todo.webp" alt="todologo"/>
//                 <figcaption>Add Your List Here ✌️</figcaption>
//             </figure>
//             <div className="addItems">
//                 <input 
//                 type = "text"
//                 placeholder="✍️ Add Item"
//                 className="form-control"
//                 value = {inputdata}
//                 onChange={(event) => setInputData(event.target.value)}
//                 />
//                 <p className="add-btn" onClick={addItem}>➕</p>
//                 {/* <i className="fa-solid fa-plus add-btn"></i> */}
//             </div>
//             <div className="addItems">
//                 {
//                     items.map((curElem) =>{
//                         return(
//                     <div className="eachItem" key={curElem.id}>
//                     <h3>{curElem.name}</h3>
//                     <div className="todo-btn">
//                     <p className="add-btn2">➕</p>
//                     <p className="add-btn3" onClick={() => deleteItem(curElem.id)}>🧹</p>
//                     </div>
//                     </div>
//                         )
//                     })
//                 }
                
//             </div>

//             <div className="showItems">

//                 <button className="btn effect04" data-sm-link-text="Remove All">
//                     <span>CHECK LIST</span>
//                     </button>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Todo

import React, { useState, useEffect } from "react";
import "./style.css";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // add the items fucnction
  const addItem = () => {
    if (!inputdata) {
      alert("plz fill the data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );

      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  //edit the items
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // how to delete items section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // remove all the elements
  const removeAll = () => {
    setItems([]);
  };

  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.webp" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleButton ? (
               <p className="add-btn2" onClick={addItem}>✍️</p>
            ) : (
                <p className="add-btn2"  onClick={addItem}>➕</p>
            )}
          </div>
          {/* show our items  */}
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                  <p className="add-btn" onClick={() => editItem(curElem.id)}>➕</p>
                <p className="add-btn" 
                  onClick={() => deleteItem(curElem.id)}>🧹</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
