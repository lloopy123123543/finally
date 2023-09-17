import React from 'react'
import { useState } from "react";
import menu from "../assets/styles/menu.module.scss";
import ArrowSvg from '../assets/svg/ArrowSvg';
export default function ColorPicker(props) {

    const [DropDown, setDropDown] = useState(false)

    return (
        <div>
            <div onClick={() => {setDropDown((prev) => !prev)}} className={menu.dropDownToBottom}>
            <div className={menu.contain}><div style={{width:"20px", height:"20px"}}>{props.label}</div></div>
            <div style={{rotate:"90deg"}}><ArrowSvg /></div>
            </div>

            {DropDown && (
                <div>

               <div onClick={() => {setDropDown((prev) => !prev)}} >

                <div style={{gap:"5px",padding:"5px", borderRadius:"5px"}} className={menu.dropDownToBottom__row}>
                <div className={menu.colorPick}>Очистить цвет</div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.black}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.darkGray}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.lightkGray}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.lighterGray}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.white}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.red}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.yellow}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.lime}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}}className={menu.green}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.aquamarine}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}} className={menu.lightBlue}></div>
                    <div style={{borderRadius:"5px", cursor:"pointer"}}className={menu.blue}></div>
                    <div>
                </div>
                <div className={menu.colorPick}><div className={menu.svg}><svg class="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20"><path d="M10.209 18.717A8.5 8.5 0 1 1 18.686 9.6h-.008l.002.12a3 3 0 0 1-2.866 2.997h-.268l-.046-.002v.002h-4.791a2 2 0 1 0 0 4 1 1 0 1 1-.128 1.992 8.665 8.665 0 0 1-.372.008Zm-3.918-7.01a1.25 1.25 0 1 0-2.415-.648 1.25 1.25 0 0 0 2.415.647ZM5.723 8.18a1.25 1.25 0 1 0 .647-2.414 1.25 1.25 0 0 0-.647 2.414ZM9.76 6.155a1.25 1.25 0 1 0 .647-2.415 1.25 1.25 0 0 0-.647 2.415Zm4.028 1.759a1.25 1.25 0 1 0 .647-2.415 1.25 1.25 0 0 0-.647 2.415Z"></path></svg></div>Выбрать цвет</div>
                </div>

               </div>
                </div>
               )}
            </div>
    )
}
