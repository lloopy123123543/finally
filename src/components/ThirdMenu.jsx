import React from 'react'
import menu from "../assets/styles/menu.module.scss";

import LinkSvg from '../assets/svg/LinkSvg';
import ImageSvg from '../assets/svg/ImageSvg';
import MediaSvg from '../assets/svg/MediaSvg';
import ClearFormattingSvg from '../assets/svg/ClearFormattingSvg';
import EmojisSvg from '../assets/svg/EmojisSvg';
import TableMenu from './TableMenu';
import DropDownV2 from './DropDownV2';
import LineHeightSvg from '../assets/svg/LineHeightSvg';
import DecreaseIndentSvg from '../assets/svg/DecreaseIndentSvg';
import IncreaseIndentSvg from '../assets/svg/IncreaseIndentSvg';
import SaveSvg from '../assets/svg/SaveSvg';
import PrintSvg from '../assets/svg/PrintSvg';
import Export_file from '../assets/svg/Export_file';
import LeftToRightSvg from '../assets/svg/LeftToRightSvg';
import RightToLeftSvg from '../assets/svg/RightToLeftSvg';
import OpenFileManagerSvg from '../assets/svg/OpenFileManagerSvg';
import InsertImageSvg from '../assets/svg/InsertImageSvg';
import ExportToPDFSvg from '../assets/svg/ExportToPDFSvg';
import ExportToWordSvg from '../assets/svg/ExportToWordSvg';
import SelectAll2Svg from '../assets/svg/SelectAll2Svg';
import ColorPicker from './ColorPicker';
import DropDown from './DropDown';
import BlockQuoteSvg from '../assets/svg/BlockQuoteSvg';

export default function ThirdMenu() {
  return (
    <div>
      
    <div className={menu.top_menu}>
         <div className={menu.dropDownToBottom}>
         <LinkSvg/>
         </div>

         <div className={menu.dropDownToBottom}>
         <ImageSvg/>
         </div>


        <TableMenu name = {"active"}/>


         <div className={menu.dropDownToBottom}>
         <MediaSvg/>
         </div>

         <DropDownV2
         label={<LineHeightSvg/>}
         items={[
          1, 1.1, 1.2, 1.3, 1.4, 1.5, 2
         ]}
         />

<div className={menu.dropDownToBottom}>
         <DecreaseIndentSvg/>
         </div>

         <div className={menu.dropDownToBottom}>
         <IncreaseIndentSvg/>
         </div>

         <div className={menu.dropDownToBottom}>
         <ClearFormattingSvg/>
         </div>

         <div className={menu.dropDownToBottom}>
         <EmojisSvg/>
         </div>

    
    </div>
    <div className={menu.line}></div>
      <div className={menu.top_menu}>
        <div className={menu.dropDownToBottom}>
        <SaveSvg/>
        </div>

        <div className={menu.dropDownToBottom}>
        <PrintSvg/>
        </div>

        <DropDownV2 
        label = {<Export_file/>}
        items={["PDF"]}
        />

<div className={menu.dropDownToBottom}>
        <LeftToRightSvg/>
        </div>

        <div className={menu.dropDownToBottom}>
        <RightToLeftSvg/>
        </div>

   </div>
   <div className={menu.line}></div>
   <div className={menu.top_menu}>

   <div style={{MaxHeight:"24px"}} className={menu.dropDownToBottom}>
        <OpenFileManagerSvg/>
      </div>
    
      <div className={menu.dropDownToBottom}>
        <InsertImageSvg/>
        </div>

        <div className={menu.dropDownToBottom}>
        <ExportToPDFSvg/>
        </div>

        <div className={menu.dropDownToBottom}>
        <ExportToWordSvg/>
        </div>

        <div className={menu.dropDownToBottom}>
        <SelectAll2Svg/>
        </div>

        <ColorPicker label={<svg class="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20"><path d="M12.4 10.3 10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5zm3.1 7H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path></svg>}/>

        <ColorPicker label={<svg class="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20"><path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8.38 9.262H7.62L10 5.506l2.38 5.756zm.532 1.285L14.34 16h1.426L10.804 4H9.196L4.234 16H5.66l1.428-3.453h5.824z"></path></svg>}/>

        <DropDown items={[
          <div style={{width:"20px", height:"20px", fill:"yellow"}}><svg viewBox="0 0 20 20"><path class="ck-icon__fill" d="M10.798 1.59 3.002 12.875l1.895 1.852 2.521 1.402 6.997-12.194z" ></path><path d="m2.556 16.727.234-.348c-.297-.151-.462-.293-.498-.426-.036-.137.002-.416.115-.837.094-.25.15-.449.169-.595a4.495 4.495 0 0 0 0-.725c-.209-.621-.303-1.041-.284-1.26.02-.218.178-.506.475-.862l6.77-9.414c.539-.91 1.605-.85 3.199.18 1.594 1.032 2.188 1.928 1.784 2.686l-5.877 10.36c-.158.412-.333.673-.526.782-.193.108-.604.179-1.232.21-.362.131-.608.237-.738.318-.13.081-.305.238-.526.47-.293.265-.504.397-.632.397-.096 0-.27-.075-.524-.226l-.31.41-1.6-1.12zm-.279.415 1.575 1.103-.392.515H1.19l1.087-1.618zm8.1-13.656-4.953 6.9L8.75 12.57l4.247-7.574c.175-.25-.188-.647-1.092-1.192-.903-.546-1.412-.652-1.528-.32zM8.244 18.5 9.59 17h9.406v1.5H8.245z"></path></svg></div>,
          <div style={{width:"20px", height:"20px", fill:"green"}}><svg viewBox="0 0 20 20"><path class="ck-icon__fill" d="M10.798 1.59 3.002 12.875l1.895 1.852 2.521 1.402 6.997-12.194z" ></path><path d="m2.556 16.727.234-.348c-.297-.151-.462-.293-.498-.426-.036-.137.002-.416.115-.837.094-.25.15-.449.169-.595a4.495 4.495 0 0 0 0-.725c-.209-.621-.303-1.041-.284-1.26.02-.218.178-.506.475-.862l6.77-9.414c.539-.91 1.605-.85 3.199.18 1.594 1.032 2.188 1.928 1.784 2.686l-5.877 10.36c-.158.412-.333.673-.526.782-.193.108-.604.179-1.232.21-.362.131-.608.237-.738.318-.13.081-.305.238-.526.47-.293.265-.504.397-.632.397-.096 0-.27-.075-.524-.226l-.31.41-1.6-1.12zm-.279.415 1.575 1.103-.392.515H1.19l1.087-1.618zm8.1-13.656-4.953 6.9L8.75 12.57l4.247-7.574c.175-.25-.188-.647-1.092-1.192-.903-.546-1.412-.652-1.528-.32zM8.244 18.5 9.59 17h9.406v1.5H8.245z"></path></svg></div>,
          <div style={{width:"20px", height:"20px", fill:"orange"}}><svg viewBox="0 0 20 20"><path class="ck-icon__fill" d="M10.798 1.59 3.002 12.875l1.895 1.852 2.521 1.402 6.997-12.194z" ></path><path d="m2.556 16.727.234-.348c-.297-.151-.462-.293-.498-.426-.036-.137.002-.416.115-.837.094-.25.15-.449.169-.595a4.495 4.495 0 0 0 0-.725c-.209-.621-.303-1.041-.284-1.26.02-.218.178-.506.475-.862l6.77-9.414c.539-.91 1.605-.85 3.199.18 1.594 1.032 2.188 1.928 1.784 2.686l-5.877 10.36c-.158.412-.333.673-.526.782-.193.108-.604.179-1.232.21-.362.131-.608.237-.738.318-.13.081-.305.238-.526.47-.293.265-.504.397-.632.397-.096 0-.27-.075-.524-.226l-.31.41-1.6-1.12zm-.279.415 1.575 1.103-.392.515H1.19l1.087-1.618zm8.1-13.656-4.953 6.9L8.75 12.57l4.247-7.574c.175-.25-.188-.647-1.092-1.192-.903-.546-1.412-.652-1.528-.32zM8.244 18.5 9.59 17h9.406v1.5H8.245z"></path></svg></div>,
          <div style={{width:"20px", height:"20px", fill:"blue"}}><svg viewBox="0 0 20 20"><path class="ck-icon__fill" d="M10.798 1.59 3.002 12.875l1.895 1.852 2.521 1.402 6.997-12.194z" ></path><path d="m2.556 16.727.234-.348c-.297-.151-.462-.293-.498-.426-.036-.137.002-.416.115-.837.094-.25.15-.449.169-.595a4.495 4.495 0 0 0 0-.725c-.209-.621-.303-1.041-.284-1.26.02-.218.178-.506.475-.862l6.77-9.414c.539-.91 1.605-.85 3.199.18 1.594 1.032 2.188 1.928 1.784 2.686l-5.877 10.36c-.158.412-.333.673-.526.782-.193.108-.604.179-1.232.21-.362.131-.608.237-.738.318-.13.081-.305.238-.526.47-.293.265-.504.397-.632.397-.096 0-.27-.075-.524-.226l-.31.41-1.6-1.12zm-.279.415 1.575 1.103-.392.515H1.19l1.087-1.618zm8.1-13.656-4.953 6.9L8.75 12.57l4.247-7.574c.175-.25-.188-.647-1.092-1.192-.903-.546-1.412-.652-1.528-.32zM8.244 18.5 9.59 17h9.406v1.5H8.245z"></path></svg></div>,
          <div style={{width:"20px", height:"20px", fill:"red"}}><svg viewBox="0 0 20 20"><path class="ck-icon__fill" d="M10.126 2.268 2.002 13.874l1.895 1.852 2.521 1.402L14.47 5.481l-1.543-2.568-2.801-.645z" ></path><path d="m4.5 18.088-2.645-1.852-.04-2.95-.006-.005.006-.008v-.025l.011.008L8.73 2.97c.165-.233.356-.417.567-.557l-1.212.308L4.604 7.9l-.83-.558 3.694-5.495 2.708-.69 1.65 1.145.046.018.85-1.216 2.16 1.512-.856 1.222c.828.967 1.144 2.141.432 3.158L7.55 17.286l.006.005-3.055.797H4.5zm-.634.166-1.976.516-.026-1.918 2.002 1.402zM9.968 3.817l-.006-.004-6.123 9.184 3.277 2.294 6.108-9.162.005.003c.317-.452-.16-1.332-1.064-1.966-.891-.624-1.865-.776-2.197-.349zM8.245 18.5 9.59 17h9.406v1.5H8.245z"></path></svg></div>,
          <div style={{width:"20px", height:"20px", fill:"green"}}><svg class="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color ck-button__icon" viewBox="0 0 20 20"><path class="ck-icon__fill" d="M10.126 2.268 2.002 13.874l1.895 1.852 2.521 1.402L14.47 5.481l-1.543-2.568-2.801-.645z"></path><path d="m4.5 18.088-2.645-1.852-.04-2.95-.006-.005.006-.008v-.025l.011.008L8.73 2.97c.165-.233.356-.417.567-.557l-1.212.308L4.604 7.9l-.83-.558 3.694-5.495 2.708-.69 1.65 1.145.046.018.85-1.216 2.16 1.512-.856 1.222c.828.967 1.144 2.141.432 3.158L7.55 17.286l.006.005-3.055.797H4.5zm-.634.166-1.976.516-.026-1.918 2.002 1.402zM9.968 3.817l-.006-.004-6.123 9.184 3.277 2.294 6.108-9.162.005.003c.317-.452-.16-1.332-1.064-1.966-.891-.624-1.865-.776-2.197-.349zM8.245 18.5 9.59 17h9.406v1.5H8.245z"></path></svg></div>,
          <svg viewBox="0 0 20 20"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"></path><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"></path></svg>
        ]}/>


        <div className={menu.dropDownToBottom}>
        <LinkSvg/>
        </div>

        <div className={menu.dropDownToBottom}>
        <BlockQuoteSvg/>
        </div>
   </div>
   <div className={menu.line}></div>
    </div>
  )
}
