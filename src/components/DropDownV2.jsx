import menu from "../assets/styles/menu.module.scss";
import { useState } from "react";
import ArrowSvg from '../assets/svg/ArrowSvg';


export default function DropDownV2(props) {
    const [DropDown, setDropDown] = useState(false)


    
  return (
    <div>
        <div onClick={() => {setDropDown((prev) => !prev)}} className={menu.dropDownToBottom}>
            <div className={menu.contain}>{props.label}</div>
            <div style={{rotate:"90deg"}}><ArrowSvg /></div>
            </div>
          {DropDown && (
            <div onClick={() => {setDropDown((prev) => !prev)}} className={menu.dropDownToBottom__row}>
            {props && props.items.map((item) => (
                <div className={menu.dropDownToBottom__row__item}>{item}</div>
            ))}
        </div>
    )}
    </div>
  )
}
