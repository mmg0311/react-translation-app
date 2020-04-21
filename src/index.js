import React ,{Suspense} from "react";
import ReactDOM from "react-dom";
import './i18n.js';
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={(<div>loading</div>)}>
    <App />
  </Suspense>,
  rootElement
);
