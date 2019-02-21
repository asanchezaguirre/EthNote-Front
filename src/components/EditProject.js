import React, { Component } from 'react';
import barrio from '../images/barrio-chino.jpg'


class EditProject extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      local:'',
      project: {},
      error: {
        status: false,
        message: ""
      }
    }
  }
    
  componentDidMount () {
    this.getProjects()
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


  //Mostrar datos en value

  getProjects = () => {
   
    const API_URL1 = 'https://stormy-falls-13377.herokuapp.com/api/v1'
    fetch(`${ API_URL1 }/projects/${this.props.data}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("aqui esta ", data.data)
        this.setState({
          project: data.data
        })
      })
      .catch(e => alert(e))
  }



//Post de la nueva informaciòn
  onSubmit = e => {

    e.preventDefault();

    const API_URL = "https://stormy-falls-13377.herokuapp.com/api/v1/"

    fetch(`${ API_URL }/projects/${this.props.data}`, {
      method: "PUT",
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
          if(typeof data.token !== "undefined") {

            localStorage.setItem("token", data.token);
            const url = window.decodeURIComponent(this.props.location.search);
            if (url !== '') {
              this.props.history.push('/' + url.split('/')[1]);
            }else {
              this.props.history.push('/login')
            }
          }else {
            this.setState({
              error: {
                status: true,
                message: data.message
              }
            })
          }
        })
        .catch(e => alert(e));
        this.props.history.push('/projects')
        
      }

  render() {
    //console.log(this.state.projects)
    return (
      <div>
        <div>
          <img src={barrio} className="cover_image"/>
        </div>
        {
        <form className = "add-project-form" onSubmit={this.onSubmit}>
          <div className = "field_addproject">
                <label className = "label has-text-dark">Título</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="title" className = "input" type="text" placeholder={this.state.project.title}/>
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <div  className = "field_addproject">
                <label className = "label has-text-dark">Tema</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="topic" className = "input" type="text" placeholder={this.state.project.topic}/>
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <div className = "field_addproject">
                <label className = "label has-text-dark">Objetivo</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="objective" className = "input" type="text" placeholder={this.state.project.objective} />
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <div className = "field_addproject">
                <label className = "label has-text-dark">Categorías</label>
                <div className = "control has-icons-left has-icons-right">
                  <input name="categories" className = "input" type="text" placeholder={this.state.project.categories}/>
                  <span className = "icon is-small is-right">
                    <i className = "fas fa-check"></i>
                  </span>
                </div>
          </div>
          <button type='submit'  variant='contained' className ="button is-link is-large is-fullwidth is-outlined">Editar Proyecto</button>
        </form>
      }
      </div>
    );
  }
}

export default EditProject;

