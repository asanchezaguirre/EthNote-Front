import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import AddNotes from './components/AddNotes';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';
import ListOfNotes from './components/ListOfNotes';
import ListOfProjects from './components/ListOfProjects';
import Photos from './components/Photos';
import Text from './components/Text';


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

          <Route exact path='/addnotes' component={AddNotes} />
          <Route exact path='/addproject' component={AddProject} />
          <Route exact path='/editproject' component={EditProject} />
          <Route exact path='/notes' component={ListOfNotes} />
          <Route exact path='/photos' component={Photos} />
          <Route exact path='/text' component={Text} />

        </Switch>
      
      </div>
    );
  }
}

export default App;
