import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./styles.css";

function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.register();
