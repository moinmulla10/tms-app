import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Service from './components/services';
import Profile from './components/profile';

class App extends Component{
  state = {
    userName:'Moin user',
    email:'',
    imageUrl:'',
    groups:[]
  }

  getEmployeeName = (childState) => {
    this.setState({
      userName: childState.employeeName,
      email: childState.email,
      imageUrl:childState.imageUrl,
      groups: childState.groups
    });
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact render={(props) => <Login userName={this.state.userName} getEmployeeName={this.getEmployeeName}></Login>}></Route>
          <Route path='/services' exact render={() => <Service></Service>}></Route>
          <Route path='/profile' exact render={() => <Profile userName={this.state.userName} email={this.state.email} imageUrl={this.state.imageUrl} groups={this.state.groups}></Profile>}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
// function App() {
//   const userName = 'Moin user';
//   const getEmployeeName = (employeeName) => {
//     userName = employeeName;
//     console.log(employeeName);
//   }
 
// }

export default App;
