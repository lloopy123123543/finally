import menu from "../assets/styles/menu.module.scss";
import { useState } from "react";
import ArrowSvg from '../assets/svg/ArrowSvg';


export default function DropDown(props) {
    const [DropDown, setDropDown] = useState(false)
    const [ChoosenItem, setChoosenItem] = useState(0)

    const chooseItemFunction = (item) => {
        let ChoosenItem = props.items.indexOf(item)
        setChoosenItem(ChoosenItem)
    }
    
  return (
    <div>
        <div onClick={() => {setDropDown((prev) => !prev)}} className={menu.dropDownToBottom}>
            <div className={menu.contain}>{props.items[ChoosenItem]}</div>
            <div style={{rotate:"90deg"}}><ArrowSvg /></div>
            </div>
          {DropDown && (
            <div onClick={() => {setDropDown((prev) => !prev)}} className={menu.dropDownToBottom__col}>
            {props && props.items.map((item) => (
                <div className={menu.dropDownToBottom__col__item} onClick={() => {chooseItemFunction(item)}}>{item}</div>
            ))}
        </div>
    )}
    </div>
  )
}
