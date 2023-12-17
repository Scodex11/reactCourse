import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusSreen } from './04-ref/FocusSreen'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { TodoApp } from './08-useReduce'
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/*<React.StrictMode> */}
        <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
