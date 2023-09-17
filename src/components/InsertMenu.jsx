import React from 'react'
import menu from "../assets/styles/menu.module.scss";
import { useState } from "react";

import ImageSvg from "../assets/svg/ImageSvg";
import LinkSvg from "../assets/svg/LinkSvg";
import MediaSvg from "../assets/svg/MediaSvg";
import TableSvg from "../assets/svg/TableSvg";
import HorizontalLine from "../assets/svg/HorizontalLine";
import MainMenuDropDown from './MainMenuDropDown';
import SideDropDown from './SideDropDown';


export default function InsertMenu() {
    const cols = 10;
    const rows = 10;
    const [Position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div>
      <MainMenuDropDown label="Вставить" items={[
        {svg: <ImageSvg/>, name: "Изображение..."},
        {svg: <LinkSvg/>, name: "Ссылка...", keyCombination: "Ctrl+K"},
        {svg: <MediaSvg/>, name: "Медиа..."},
        <SideDropDown svg={<TableSvg/>} label="Таблица" items={[
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <div className={menu.create_table}>
          {Array(rows)
            .fill(0)
            .map((item1, indexY) => (
              <div key={indexY}>
                {Array(cols)
                  .fill(0)
                  .map((item2, indexX) => (
                    <button
                      key={indexX}
                      className={menu.create_table__cell}
                      onMouseEnter={() => setPosition({ x: indexX, y: indexY })}
                      style={{
                        backgroundColor:
                          indexX <= Position.x && indexY <= Position.y
                            ? "#8eb5f1"
                            : "",
                      }}
                    ></button>
                  ))}
              </div>
            ))}  
        </div> 
        <div>{Position.x + 1}х{Position.y + 1}</div>
        </div>
        ]}/>,
        {line: true},
        {svg: <HorizontalLine/>, name: "Горизонтальная линия"},
        
      ]}/>
    </div>
  )
}
