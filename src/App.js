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
import Note from './components/Note';



import PrivateRoute from "./components/PrivateComponent";

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      projectId: '',
      
    }
  }

  onChangeValue=(newvalue) =>{
    this.setState({
      projectId: newvalue
    })
  }

  render() {
    return (
      <div >
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route  path='/projects' render={(props)=> <ListOfProjects {...props} data={this.state.projectId} onChangeValue={this.onChangeValue}/>}  exact/>

          <Route exact path='/addnotes' render={(props)=> <AddNotes {...props} data={this.state.projectId} />} exact/>
          <Route exact path='/addproject' component={AddProject} />
          <Route exact path='/editproject' render={(props)=> <EditProject {...props} data={this.state.projectId} />} exact/>
          <Route exact path='/notes' render={(props)=> <ListOfNotes {...props} data={this.state.projectId} />} exact/>
          <Route exact path='/note' component={Note} />

        </Switch>
      
      </div>
    );
  }
}

export default App;