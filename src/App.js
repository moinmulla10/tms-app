import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact render={() => <Login></Login>}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
