import React, { useState } from 'react'

import menu from "../assets/styles/menu.module.scss";
import MainMenuDropDown from './MainMenuDropDown';
import SideDropDown from './SideDropDown';

import ArrowSvg from "../assets/svg/ArrowSvg";
import TableSvg from "../assets/svg/TableSvg";
import CellPropertiesSvg from "../assets/svg/CellPropertiesSvg";
import MergeCellsSvg from "../assets/svg/MergeCellsSvg";
import SplitCellsSvg from "../assets/svg/SplitCellsSvg";

import InsertRowBeforeSvg from "../assets/svg/InsertRowBeforeSvg";
import InsertRowAfterSvg from "../assets/svg/InsertRowAfterSvg";
import DeleteRowSvg from "../assets/svg/DeleteRowSvg";
import RowPropertiesSvg from "../assets/svg/RowPropertiesSvg";
import CutRowSvg from "../assets/svg/CutRowSvg";
import CopyRowSvg from "../assets/svg/CopyRowSvg";
import PasteRowBeforeSvg from '../assets/svg/PasteRowBeforeSvg';
import PasteRowAfterSvg from '../assets/svg/PasteRowAfterSvg';

import InsertColumnBeforeSvg from "../assets/svg/InsertColumnBeforeSvg";
import InsertColumnAfterSvg from "../assets/svg/InsertColumnAfterSvg";
import DeleteColumnSvg from "../assets/svg/DeleteColumnSvg";
import CutColumnSvg from "../assets/svg/CutColumnSvg";
import CopyColumnSvg from "../assets/svg/CopyColumnSvg";
import PasteColumnBeforeSvg from "../assets/svg/PasteColumnBeforeSvg";
import PasteColumnAfterSvg from "../assets/svg/PasteColumnAfterSvg";


import DeleteTableSvg from '../assets/svg/DeleteTableSvg';


export default function TableMenu() {
    const cols = 10;
const rows = 10;
const [Position, setPosition] = useState({ x: 0, y: 0 });
  
  return (
    <div>
        <MainMenuDropDown label="Таблица" items={[
            <SideDropDown label="Ячейки" items={[
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <CellPropertiesSvg/>
                  Свойства ячейки
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <MergeCellsSvg/>
                  Объеденить ячейки
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <SplitCellsSvg/>
                  Разъеденить ячейки
                </div>
                </div>,
            ]}/>,
            <SideDropDown label = "Сортировка" items={[
                
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                Сортировка колонок к наибольшему
              </div>
              </div>,
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                Сортировка колонок к наименьшему
              </div>
              </div>,
              <div className={menu.line}></div>,
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                Расширенная сортировка
              </div>
              </div>,
            ]}/>,
            {line:true},
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
            {line:true},
            <SideDropDown label="Строки" items={[
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <InsertRowBeforeSvg/>
                  Создать строку перед
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <InsertRowAfterSvg/>
                  Создать строку после
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <DeleteRowSvg/>
                  Удалить строку
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <RowPropertiesSvg/>
                  Свойства Строки
                </div>
                </div>,
                <div className={menu.line}></div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <CutRowSvg/>
                  Вырезать строку
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <CopyRowSvg/>
                  Копировать строку
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <PasteRowBeforeSvg/>
                  Вставить строку до
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <PasteRowAfterSvg/>
                  Вставить строку после
                </div>
                </div>,
            ]}/>,
            <SideDropDown label="Колонки" items={[
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <InsertColumnBeforeSvg/>
                  Создать колонку перед
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <InsertColumnAfterSvg/>
                  Создать колонку после
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <DeleteColumnSvg/>
                  Удалить колонку
                </div>
                </div>,
                <div className={menu.line}></div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <CutColumnSvg/>
                  Вырезать колонку
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <CopyColumnSvg/>
                  Копировать колонку
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <PasteColumnBeforeSvg/>
                  Вставить колонку до
                </div>
                </div>,
                <div className={menu.drop_menu__row}>
                <div className={menu.sub_drop_down_menu}>
                  <PasteColumnAfterSvg/>
                  Вставить колонку после
                </div>
                </div>,
            ]}/>,
            {line:true},
            {name: "Свойства таблицы"},
            {svg: <DeleteTableSvg/>, name: "Удалить таблицу"},
        ]}/>
    </div>

  )
}
