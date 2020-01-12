import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Login></Login>
      </div>
    </BrowserRouter>
  );
}

export default App;
