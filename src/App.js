import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Service from './components/services';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact render={() => <Login></Login>}></Route>
        <Route path='/services' exact render={() => <Service></Service>}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
