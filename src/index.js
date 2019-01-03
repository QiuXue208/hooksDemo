import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import "./styles.css";
function Row(props) {
  return <div>{props.name === "" ? "请输入名字" : props.name}</div>;
}
function App() {
  let [name, setName] = useState("Marry");
  function changeName(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <Row name={name} />
      <input type="text" value={name} onChange={changeName} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
