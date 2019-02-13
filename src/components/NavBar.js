import React, { Component } from 'react';
import { Navbar } from "react-bulma-components/full";
import logo from '../images/ethnote.png';

import { Link } from 'react-router-dom';


class NavBar extends Component {
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
		        <Link to='/projects'><p class="navbar-item">Proyectos</p></Link>
		    <div class="navbar-item has-dropdown is-hoverable">
		        <p class="navbar-link">Notas</p>
		        <div class="navbar-dropdown">
		        	<p class="navbar-item">Revisar</p>
					<p class="navbar-item">Agregar</p> 
		        </div>
		    </div>
		    </div>
		    <div class="navbar-end">
		      <div class="navbar-item">
		        <div class="buttons">
		          <button class="button is-link">
		            <strong>Sign up</strong>
		          </button>
		          <button class="button is-light">Log in</button>
		        </div>
		      </div>
		    </div>
		  </div>
		</nav>
      </div>
    );
  }
}

export default NavBar;