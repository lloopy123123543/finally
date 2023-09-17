import React from 'react'

import menu from "../assets/styles/menu.module.scss";

import Exportfile from "../assets/svg/Export_file";
import PrintSvg from "../assets/svg/PrintSvg";

import SideDropDown from './SideDropDown';

import MainMenuDropDown from './MainMenuDropDown';
export default function FileMenu() {

  return (
    <div>
      <MainMenuDropDown label = "Файл" items={[
        <SideDropDown svg={<Exportfile />} label="Экспорт" items={[
      <div className={menu.drop_side_menu_item}>PDF</div>,   
   ]}/>,
   {svg: <PrintSvg/>, name: "Печать", keyCombination: "Ctrl+P"},
      ]}/>
    </div>

  )
}
