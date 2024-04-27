import React, { useState } from 'react'
// import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import navbar from './navbar';
const uniqueList = [...new Set(Menu.map((currElem) => {
    return currElem.category;
}),
"All",
)];

const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList,setmenuList] = useState(uniqueList);
    const filterItem = (category) =>{

        if(category === "All")
        {
            setmenuData(Menu);
        }
        const updatedList = Menu.filter((currElem) =>{
            return currElem.category === category;
        });
        setmenuData(updatedList);
    };
  return (
    <>
    <navbar filterItem ={filterItem} menuList={menuList} />
    <MenuCard menuData = {menuData}/>
    </> 
  );
};
export default Restaurant;
