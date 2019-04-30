import React from "react";
// import logo from './logo.svg';
// import NavBar from "./NavBar/NavBar";
import MainContent from "./MainContent/MainContent";
import Reinsurance from "./Reinsurance/Reinsurance";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <MainContent />
        <div className="reinsurance-wrapper">
          <div className="Resinsurance-element-wrapper">
            <Reinsurance title="ABC" subtitle="DEF" img="./images/icon1.png" />
            <Reinsurance title="ABC" subtitle="DEF" img="./images/icon1.png" />
            <Reinsurance title="ABC" subtitle="DEF" img="./images/icon1.png" />
            <Reinsurance title="ABC" subtitle="DEF" img="./images/icon1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
