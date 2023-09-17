import React from 'react'

import HelpSvg from '../assets/svg/HelpSvg';
import MainMenuDropDown from './MainMenuDropDown';

export default function HelpMenu() {
    

  
  return (
    <MainMenuDropDown label="Помощь" items={[
      {svg: <HelpSvg/>, name: "Помощь", keyCombination: "Alt+0"},
    ]}/>
  )
}
