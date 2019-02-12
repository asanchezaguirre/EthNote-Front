import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import { Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          
        </Switch>
      
      </div>
    );
  }
}

export default App;
