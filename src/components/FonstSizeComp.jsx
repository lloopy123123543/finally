import React, { useState } from 'react'
import menu from "../assets/styles/menu.module.scss";

export default function FonstSizeComp() {
    const [Counter, setCounter] = useState(16)

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
          setCounter(value);
        }
      };

  return (
    <div className={menu.chooseFontSize}>
        <div onClick={() => {setCounter((prev) => prev-1)}} className={menu.chooseFontSize__item}>-</div>
        <div><input onChange={handleInputChange} value={Counter + "px"}></input></div>
        <div onClick={() => {setCounter((prev) => prev+1)}} className={menu.chooseFontSize__item}>+</div>
    </div>
  )
}
