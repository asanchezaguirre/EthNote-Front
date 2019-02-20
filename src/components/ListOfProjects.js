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
          <img src={metro} className = "cover_image"/>
        </div>
      	Lista de proyectos
        {this.state.projects.map(project => (
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">{project.title}</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <p>{project.objective}</p>
                <p>{project.categories}</p>
                <br/>
              </div>
            </div>
            <footer class="card-footer">
              <Link to='/notes' class="card-footer-item"><button onClick={()=>this.props.onChangeValue(project._id)}>Seleccionar</button></Link>
           
             <Link to='/editproject' class="card-footer-item"><button onClick={()=>this.props.onChangeValue(project._id)}>Editar</button></Link>
            </footer>
          </div>
      	
		   ))}
	  	  <div>
      		<Link to='/addproject'><button class="button is-link is-small">Agregar Proyecto</button></Link>
      	</div>    
      </div>
    );
  }
}

export default ListOfProjects;

