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
		<nav class="navbar" role="navigation" aria-label="main navigation">
		  	<div class="navbar-brand">
		      <Link to='/'><img src={logo} width="112" height="28"/></Link>
			    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			    </a>
		 	</div>
		  <div id="navbarBasicExample" class="navbar-menu">
		    <div class="navbar-start">
		        <p class="navbar-item">Acerca de</p>
		    <div class="navbar-item has-dropdown is-hoverable">
		    	<p class="navbar-link"><Link to='/projects'>Proyectos</Link></p>
		    	<div class="navbar-dropdown">
		        	<p class="navbar-item"><Link to='/addproject'>Agregar</Link></p>
					<p class="navbar-item"><Link to='/editproject'>Editar</Link></p> 
		        </div>
		    </div>
		    </div>
		    <div class="navbar-end">
		      <div class="navbar-item">
		      	{!isLoggedIn() && (
		      		<div class="buttons">
			          <button class="button is-link">
			            <strong>Sign up</strong>
			          </button>
			          <button class="button is-light">Log in</button>
			        </div>
		            
		          )}
		          {isLoggedIn() && (
		          	<div>
			        	<Link className='NavMenu' to='/login'>
			              <p>Hola {this.state.name}</p>
			            </Link>
			            <button onClick={ this.handleLogout }>Logout</button>
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