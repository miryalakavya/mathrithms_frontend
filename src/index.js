import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Components/Homepage";

import "./styles.css";
import SideBar from "./sidebar";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div></div>
      <Homepage></Homepage>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
