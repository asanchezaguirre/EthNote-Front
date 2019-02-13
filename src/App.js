import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ListOfProjects from './components/ListOfProjects';


import PrivateRoute from "./components/PrivateComponent";

import './App.css';


class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute  path='/projects' component={ListOfProjects} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
