import menu from "./assets/styles/menu.module.scss";
import FileMenu from "./components/FileMenu";
import EditMenu from "./components/EditMenu";
import InsertMenu from "./components/InsertMenu";
import TableMenu from "./components/TableMenu";
import FormatMenu from "./components/FormatMenu";
import HelpMenu from "./components/HelpMenu";


import SecondMenu from "./components/SecondMenu";
import FormatText from "./components/FormatText";

function App() {

  return (
    <div>
      <div className={menu.top_menu}>
        <FileMenu/>
        <EditMenu/>
        <InsertMenu/>
        <FormatMenu/>
        <TableMenu/>
        <HelpMenu/>

      </div>
      <SecondMenu/>
    </div>
  );
}

export default App;
