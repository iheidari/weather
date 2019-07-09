import React from "react";
import ReactDOM from "react-dom";
import Weather from "./components/Weather/Weather";
import "./index.css";

const App = () => {
  return <div className="aaa">Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<Weather />, document.querySelector("#root"));
