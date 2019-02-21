import React, { Component } from 'react';
import { Navbar } from "react-bulma-components/full";
import logo from '../images/ethnote.png';
import isLoggedIn from '../utils/isLoggedIn'

import { Link, withRouter } from "react-router-dom";


class NavBar extends Component {
	constructor(){
    super()
    this.state={
      users:[],
      name:''
     
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
            this.setState({ 
            	user:user,
            	name: user.name
             })
            
            return user
          }
        })
        //console.log(currentUser)
      })
  }

	handleLogout = () => {
    const { history } = this.props

    localStorage.removeItem('token');
    history.push('/')
  }


  render() {
    return (
      <div>
		<nav className ="navbar" role="navigation" aria-label="main navigation">
		  	<div className ="navbar-brand">
		      <Link to='/'><img src={logo} width="112" height="28"/></Link>
			    <a role="button" className ="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			    </a>
		 	</div>
		  <div id="navbarBasicExample" className="navbar-menu">
		    <div className ="navbar-start">
		        <p className ="navbar-item">Acerca de</p>
		    <div className ="navbar-item has-dropdown is-hoverable">
		    	<p className ="navbar-link"><Link to='/projects'>Proyectos</Link></p>
		    	<div className ="navbar-dropdown">
		        	<p className ="navbar-item"><Link to='/addproject'>Agregar</Link></p>
					<p className ="navbar-item"><Link to='/editproject'>Editar</Link></p> 
		        </div>
		    </div>
		    </div>
		    <div className ="navbar-end">
		      <div className ="navbar-item">
		      	{!isLoggedIn() && (
		      		<div className ="buttons">
			          <button className ="button is-link">
			            <strong>Sign up</strong>
			          </button>
			          <button className ="button is-light">Log in</button>
			        </div>
		            
		          )}
		          {isLoggedIn() && (
		          	<div className="navbar-item">
			        	<Link className='NavMenu' to='/login'>
			              <p>Hola {this.state.name}</p>
			            </Link>
			            <button className ="button is-light" onClick={ this.handleLogout }>Logout</button>
		            </div>
		        )}
		      </div>
		    </div>
		  </div>
		</nav>
      </div>
    );
  }
}

export default withRouter(NavBar);