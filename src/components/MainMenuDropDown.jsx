import React, { useState } from 'react'
import menu from "../assets/styles/menu.module.scss";
export default function MainMenuDropDown(props) {

    const [InsertIsOpen, setInsertIsOpen] = useState(false);
  
  return (
    <div>
            <div
    onMouseLeave={() => {
      setInsertIsOpen(false);
    }}
    onMouseEnter={() => {
      setInsertIsOpen(true);
    }}
    className={menu.top_menu__text}
  >
    <div>{props.label}</div>
    {InsertIsOpen && (
      <div className={menu.drop_menu}>
            {props.items && (props.items.map((item) => (
                <div>
                    {item.line ? (
                      <div className={menu.line}></div>
                    ): (
                      <div>
                        {!item.svg & !item.name & !item.keyCombination ? (
                          <div>{item}</div>
                        ): (
                          <div className={menu.drop_menu__row}>
<div className={menu.contain}>
    {item.svg}
    {item.name}
    </div>
    <div className={menu.combination_buttons}>{item.keyCombination}</div>
</div> 
                        )}
                      </div>
                    )}
                </div>
                
            )))}

      </div>
    )}
  </div>
    </div>
  )
}









// {props.items && (props.items.map((item) => (
//   <div>
//       {!item.line ? (
//       <div className={menu.drop_menu__row}>
//           <div className={menu.contain}>
//               {item.svg}
//               {item.name}
//               </div>
//               <div className={menu.combination_buttons}>{item.keyCombination}</div>
//           </div>
//       ): <div className={menu.line}></div>}
//   </div>
  
// )))}