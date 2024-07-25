import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./pages/StateProvider/StateProvider.jsx";
import reducer, { initialValue } from "./reducer.jsx";

//---------------------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialValue={initialValue}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
