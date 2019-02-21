import React, { Component } from 'react';
import luz from '../images/luz.jpg'

import { Link } from 'react-router-dom';


class ListOfNotes extends Component {
  constructor(){
    super()
    this.state={
      users:[],
      local: '',
      notes:[],
      
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
            //console.log(user)
            
          }
        })
        this.getNotes(currentUser)
      })
  }

  getNotes = (currentUser) => {
    //console.log(this.props.data)
    
    const API_URL = 'https://stormy-falls-13377.herokuapp.com/api/v1'
    fetch(`${API_URL}/projects/${this.props.data}/notes`, {
      method: 'GET',
      headers: {
        "Authorization": `barear ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        this.setState({
          notes: data.data
        })

      })
      .catch(e => alert(e))
  }






  render() {
    console.log(this.props.data)
    return (

     
      <div>
       <div>
          <img src={luz} className="cover_image"/>
      </div>
        Lista de notas
        {this.state.notes.map(note => (
           <div className ="card">
                  <header className ="card-header">
                    <p className ="card-header-title">{note.location}</p>
                    <a href="#" className ="card-header-icon" aria-label="more options">
                      <span className ="icon">
                        <i className ="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div className ="card-content">
                    <div className ="content">
                      <p>{note.date}</p>
                      <p>{note.period}</p>
                      <br/>
                    </div>
                  </div>
                  <footer className ="card-footer">
                   <Link  to={`/notes/${note._id}`}><button>Ver detalle</button></Link>
                  </footer>
                </div>
              
             ))}
    <div>
      <Link to='/addnotes'><button className ="button is-link is-small">Agregar Nota</button></Link>
    </div>
    


      </div>
    );
  }
}

export default ListOfNotes;