import React, { Component } from 'react';
import latino from '../images/latino.jpg';

const Nexmo = require('nexmo');


class AddProject extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      local:'',
      error: {
        status: false,
        message: ""
      }
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
        //console.log(data)
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
      })
  }


  onSubmit = e => {

    e.preventDefault();

    const API_URL = "https://stormy-falls-13377.herokuapp.com/api/v1/"

    fetch(`${ API_URL }/projects`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
         
       },
          body: JSON.stringify({
            title: e.target.title.value,
            topic: e.target.topic.value,
            objective: e.target.objective.value,
            categories: e.target.categories.value,
            user: this.state.user._id
          
          })
            
        }) 



        .then(response => response.json())
        
        .then(data => {
          //console.log("dentro de data", data)
          //this.send()  
            this.setState({
              error: {
                status: true,
                message: data.message
              }
            })
        })
        .catch(e => alert(e));
        this.props.history.push('/projects')  
      }





  render() {

    return (
      <div>
      	<div>
          <img src={latino} className="cover_image"/>
        </div>
        <form className = "add-project-form" onSubmit={this.onSubmit}>
        	<div className = "field">
                <label className = "label has-text-dark">Título</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="title" className = "input" type="text" placeholder="Text input" />
                  <span className = "icon is-small is-left">
                    <i className = "fas fa-user"></i>
                  </span>
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <div className = "field">
                <label className = "label has-text-dark">Tema</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="topic" className = "input" type="text" placeholder="Text input" />
                  <span className = "icon is-small is-left">
                    <i className = "fas fa-user"></i>
                  </span>
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <div className = "field">
                <label className = "label has-text-dark">Objetivo</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="objective" className = "input" type="text" placeholder="Text input" />
                  <span className = "icon is-small is-left">
                    <i className = "fas fa-user"></i>
                  </span>
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <div className = "field">
                <label className = "label has-text-dark">Categorías</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="categories" className = "input" type="text" placeholder="Text input" />
                  <span className = "icon is-small is-left">
                    <i className = "fas fa-user"></i>
                  </span>
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <button type='submit'  variant='contained' className ="button is-link is-large is-fullwidth is-outlined">Agregar Proyecto</button>
        </form>
      </div>
    );
  }
}

export default AddProject;

