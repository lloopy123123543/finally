import React from 'react'

import menu from "../assets/styles/menu.module.scss";

import BoldSvg from "../assets/svg/BoldSvg";
import ItalicSvg from "../assets/svg/ItalicSvg";
import UnderLineSvg from "../assets/svg/UnderlineSvg";
import StrikethroughSvg from "../assets/svg/StrikethroughSvg";
import SuperscriptSvg from "../assets/svg/SuperScriptSvg";
import SubScriptSvg from "../assets/svg/SubScriptSvg";
import AlignLeftSvg from "../assets/svg/AlignLeftSvg";
import AlignCenterSvg from "../assets/svg/AlignCenterSvg";
import AlignRightSvg from "../assets/svg/AlignRightSvg";
import AlignJustifySvg from "../assets/svg/AlignJustifySvg";

import ClearFormattingSvg from "../assets/svg/ClearFormattingSvg";
import MainMenuDropDown from './MainMenuDropDown';
import SideDropDown from './SideDropDown';


export default function FormatMenu() {
  
  return (
    <div>
        <MainMenuDropDown label="Формат" items={[
               {svg: <BoldSvg/>, name: "Жирный", keyCombination: "Ctrl+B", },
               {svg: <ItalicSvg/>, name: "Курсив", keyCombination: "Ctrl+I", },
               {svg: <UnderLineSvg/>, name: "Подчеркнуть", keyCombination: "Ctrl+U", },
               {svg: <StrikethroughSvg/>, name: "Перечеркнуть", },
               {svg: <SuperscriptSvg/>, name: "Надстрочный индекс", },
               {svg: <SubScriptSvg/>, name: "Нижний индекс", },
               {line:true},
               <SideDropDown label="Формат" items={[
                <SideDropDown label="Заголовки" items={[
                    <div className={menu.sub_drop_down_menu}>
                    <h1>Заголовок1</h1>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <h2>Заголовок2</h2>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <h3>Заголовок3</h3>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <h4>Заголовок4</h4>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <h5>Заголовок5</h5>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <h6>Заголовок6</h6>
                  </div>,
                ]}/>,
                <SideDropDown label="Шрифты" items={[
                    <div
                    className={menu.sub_drop_down_menu}
                    style={{ fontWeight: "bold" }}
                  >
                    Жирный
                  </div>,
                  <div
                    className={menu.sub_drop_down_menu}
                    style={{ fontStyle: "italic" }}
                  >
                    Курсив
                  </div>,
                  <div
                    className={menu.sub_drop_down_menu}
                    style={{ textDecoration: "underline" }}
                  >
                    Подчеркивание
                  </div>,
                  <div
                    className={menu.sub_drop_down_menu}
                    style={{ textDecoration: "line-through" }}
                  >
                    Перечеркивание
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    Надстрочный индекс
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    Подстрочный индекс
                  </div>

                ]}/>,
                <SideDropDown label="Блок" items={[
                    <div className={menu.sub_drop_down_menu}>
                    <div
                      style={{ fontSize: "18px" }}
                      className={menu.contain}
                    >
                      Параграф
                    </div>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <div
                      style={{ fontSize: "18px" }}
                      className={menu.contain}
                    >
                      Цитата
                    </div>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <div
                      style={{ fontSize: "18px" }}
                      className={menu.contain}
                    >
                      Div
                    </div>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <div
                      style={{ fontSize: "18px" }}
                      className={menu.contain}
                    >
                      Pre
                    </div>
                  </div>,
                ]}/>,
                <SideDropDown label="Выровнить" items={[
                    <div className={menu.sub_drop_down_menu}>
                    <div
                      style={{ fontSize: "18px", textAlign: "center" }}
                    >
                      По центру
                    </div>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <div
                      style={{ fontSize: "18px", textAlign: "start" }}
                    >
                      По левому краю
                    </div>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <div style={{ fontSize: "18px", textAlign: "end" }}>
                      По правому краю
                    </div>
                  </div>,
                  <div className={menu.sub_drop_down_menu}>
                    <div
                      style={{ fontSize: "18px", textAlign: "justify" }}
                    >
                      По ширине
                    </div>
                  </div>,
                ]}/>
               ]}/>,
               <SideDropDown label="Блоки" items={[
                <div
                style={{ fontSize: "18px" }}
                className={menu.sub_drop_down_menu}>
                Параграф
              </div>,
              <div className={menu.line}></div>,
              <div className={menu.sub_drop_down_menu}>
                <h1>Заголовок1</h1>
              </div>,
              <div className={menu.sub_drop_down_menu}>
                <h2>Заголовок2</h2>
              </div>,
              <div className={menu.sub_drop_down_menu}>
                <h3>Заголовок3</h3>
              </div>,
              <div className={menu.sub_drop_down_menu}>
                <h4>Заголовок4</h4>
              </div>,
              <div className={menu.sub_drop_down_menu}>
                <h5>Заголовок5</h5>
              </div>,
              <div className={menu.sub_drop_down_menu}>
                <h6>Заголовок6</h6>
              </div>,
              <div className={menu.line}></div>,
              <div
                style={{ fontSize: "18px" }}
                className={menu.sub_drop_down_menu}
              >
                Предформатированные
              </div>
              ]}/>,
              <SideDropDown label="Шрифты" items={[
                <div
                style={{
                  fontFamily: "Andale Mono",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Andale Mono
              </div>,
              <div
                style={{
                  fontFamily: "Arial",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Arial
              </div>,
              <div
                style={{
                  fontFamily: "Arial Black",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Arial Black
              </div>,
              <div
                style={{
                  fontFamily: "Book Antiqua",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Book Antiqua
              </div>,
              <div
                style={{
                  fontFamily: "Comic Sans MS",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Comic Sans MS
              </div>,
              <div
                style={{
                  fontFamily: "Courier New",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Courier New
              </div>,
              <div
                style={{
                  fontFamily: "Georgia",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Georgia
              </div>,
              <div
                style={{
                  fontFamily: "Helvetica",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Helvetica
              </div>,
              <div
                style={{
                  fontFamily: "Impact",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Impact
              </div>,
              <div
                style={{
                  fontFamily: "Tahoma",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Tahoma
              </div>,
              <div
                style={{
                  fontFamily: "Terminal",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Terminal
              </div>,
              <div
                style={{
                  fontFamily: "Times New Roman",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Times New Roman
              </div>,
              <div
                style={{
                  fontFamily: "Trebuchet MS",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Trebuchet MS
              </div>,
              <div
                style={{
                  fontFamily: "Verdana",
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Verdana
              </div>,
              <div
                style={{
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Webdings
              </div>,
              <div
                style={{
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "18px",
                }}
                className={menu.sub_drop_down_menu}
              >
                Wingdings
              </div>,
              ]}/>,
              <SideDropDown label="Размер шрифта" items={[
                <div className={menu.sub_drop_down_menuV2}>8pt</div>,
                <div className={menu.sub_drop_down_menuV2}>10pt</div>,
                <div className={menu.sub_drop_down_menuV2}>12pt</div>,
                <div className={menu.sub_drop_down_menuV2}>14pt</div>,
                <div className={menu.sub_drop_down_menuV2}>18pt</div>,
                <div className={menu.sub_drop_down_menuV2}>24pt</div>,
                <div className={menu.sub_drop_down_menuV2}>36pt</div>,
              ]}/>,
              <SideDropDown label="Абзац" items={[
                <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <AlignLeftSvg />
                  По левому
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <AlignCenterSvg />
                  По центру
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <AlignRightSvg />
                  По правому
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <AlignJustifySvg />
                  По ширине
                </div>
              </div>,
              ]}/>,
              <SideDropDown label="Высота строки" items={[
                <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  1
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  1.1
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  1.2
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  1.3
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  1.4
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  1.5
                </div>
              </div>,

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  2
                </div>
              </div>,
              ]}/>,
              {line:true},
              {svg: <ClearFormattingSvg/>, name: "Очистить форматирование", },
        ]}/>
    </div>

  )
}
