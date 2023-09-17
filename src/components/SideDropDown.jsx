import React, { useState } from 'react'
import menu from "../assets/styles/menu.module.scss";
import ArrowSvg from '../assets/svg/ArrowSvg';
export default function SideDropDown(props) {

  
    const [BlocksDropDown, setBlocksDropDown] = useState(false);
  
  return (

    <div
    onMouseLeave={() => {
      setBlocksDropDown(false);
    }}
    onMouseEnter={() => {
      setBlocksDropDown(true);
    }}
    className={menu.drop_menu__row}
  >
    <div className={menu.contain}>
        {props.svg}
      {props.label}
    </div>
    <ArrowSvg />
    {BlocksDropDown && (
      <div
        onMouseLeave={() => {
          setBlocksDropDown(false);
        }}
        onMouseEnter={() => {
          setBlocksDropDown(true);
        }}
        className={menu.drop_side_menu}
      >
        {props.items && props.items.map((item) => (
            <div>
                {item}
            </div>
        ))}


      </div>
    )}
  </div>
  )
}
