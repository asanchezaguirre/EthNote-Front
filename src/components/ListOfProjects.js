import React, { Component } from 'react';
import metro from '../images/metro.jpg'
import { Tile } from "react-bulma-components/full";

import { Link } from 'react-router-dom';

class ListOfProjects extends Component {
  constructor(){
    super()
    this.state={
      users:[],
      local: '',
      projects:[],
      projectId:''
    }
  }

  componentDidMount () {
    fetch('https://stormy-falls-13377.herokuapp.com/api/v1/users', {
      headers:{
          "Authorization": `barear ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data.users)
        this.setState({
          users: data.users
        })

        const token = localStorage.getItem('token')
        //console.log(token);
        let base64Url = token.split('.')[1]
        let base64 = base64Url.replace('-', '+').replace('_', '/')
        const t = JSON.parse(window.atob(base64))
        //console.log(t.email)
        const currentUser = data.users.filter(user => {
          if (user.email === t.email) {
            this.setState({ user: user })
            return user
            
          }
        })
        this.getProjects(currentUser)
      })
  }

  getProjects = currentUser => {
    //console.log(currentUser)
    const userId = currentUser[0]._id
    //console.log(userId)
    const API_URL = 'https://stormy-falls-13377.herokuapp.com/api/v1'
    fetch(`${API_URL}/users/${userId}/projects`, {
      method: 'GET',
      headers: {
        "Authorization": `barear ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        this.setState({
          projects: data.data
        })
      })
      .catch(e => alert(e))
  }



  render() {

    return (
      <div>
      	<div>
        <div className="call-to-action-container">
          <span className = "title is-2 is-spaced has-text-centered" >Lista de proyectos</span>
          <Link to='/addproject'><button className = "button is-link is-outlined">Agregar Proyecto</button></Link>
        </div> 
          <img src={metro} className = "cover_image"/>
        </div>
      	<div className="cards-container">
        {this.state.projects.map(project => (
          
            <div className = "card">
            <header className = "card-header">
            <p>Tìtulo del proyecto:</p>
              <p className = "card-header-title">{project.title}</p>
             
            </header>
            <div className = "card-content">
              <div className = "content">
                
                <p>Objetivo: {project.objective}</p>
                 
                <p>Categorias: {project.categories}</p>
                <br/>
              </div>
            </div>
            <footer className = "card-footer">
              <Link to='/notes' className = "card-footer-item"><button className="button is-link is-outlined" onClick={()=>this.props.onChangeValue(project._id)}>Seleccionar</button></Link>
           
             <Link to='/editproject' className = "card-footer-item"><button className="button is-link is-outlined" onClick={()=>this.props.onChangeValue(project._id)}>Editar</button></Link>
            </footer>
          </div>
          
          
      	
		   ))}
        </div>
	  	     
      </div>
    );
  }
}

export default ListOfProjects;

