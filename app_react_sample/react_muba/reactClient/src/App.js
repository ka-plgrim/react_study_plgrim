import './App.css';
import CompButton from './component/CompButton.js'
import CompUseState from "./component/CompUseState";
import CompJsonData from "./component/CompJsonData";
import CompJsonFile from "./component/ComJsonFile";
import CompTable from "./component/CompTable";
import CompConnectNodeServer from "./component/CompConnectNodeServer";

function App() {

  return (
      <div className="App">
          <CompButton name="Kevin" msg="Durant"/>
          <CompUseState/>
          <CompJsonData/>
          <CompJsonFile/>
          <CompTable/>
          <CompConnectNodeServer/>
      </div>
  );
}

export default App;
