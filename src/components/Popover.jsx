
import { useState } from "react";
import menu from "../assets/styles/menu.module.scss";
export default function Popover(props) {
    const [CheckChildren, setCheckChildren] = useState(false)


  return (
    <div >
          {CheckChildren && (<div className={menu.popover}>{CheckChildren}</div>)}
    <div>
         <div  onMouseLeave={() => {setCheckChildren(false)}} onMouseEnter={() => { setCheckChildren(props.name)}}>{props.children}</div>
        </div>
    </div>
  )
}
