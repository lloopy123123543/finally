import React from 'react'

import UndoSvg from "../assets/svg/UndoSvg";
import RedoSvg from "../assets/svg/RedoSvg";
import CutSvg from "../assets/svg/CutSvg";
import CopySvg from "../assets/svg/CopySvg";
import PasteSvg from "../assets/svg/PasteSvg";
import SelectAllSvg from "../assets/svg/SelectAllSvg";
import MainMenuDropDown from './MainMenuDropDown';
import SideDropDown from './SideDropDown';


export default function EditMenu() {
    
  return (
    <div>
        <MainMenuDropDown label={"Изменить"} items={[
          {svg: <UndoSvg/>, name: "Отменить", keyCombination: "Ctrl+Z"},
          {svg: <RedoSvg/>, name: "Вернуть", keyCombination: "Ctrl+Y"},
          {line: true},
          {svg: <CutSvg/>, name: "Вырезать", keyCombination: "Ctrl+X"},
          {svg: <CopySvg/>, name: "Копировать", keyCombination: "Ctrl+C"},
          {svg: <PasteSvg/>, name: "Вставить", keyCombination: "Ctrl+V"},
          {line: true},
          {svg: <SelectAllSvg/>, name: "Выбрать все", keyCombination: "Ctrl+A"},
        ]}/>

    </div>


  )
}
