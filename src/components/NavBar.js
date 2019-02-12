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
		      <a class="navbar-item">
		        Acerca de
		      </a>

		      <a class="navbar-item">
		        Proyectos
		      </a>

		      <div class="navbar-item has-dropdown is-hoverable">
		        <a class="navbar-link">
		          Notas
		        </a>
		        <div class="navbar-dropdown">
		        <a class="navbar-item">
		            Revisar
		          </a>

		          <a class="navbar-item">
		            Agregar
		          </a>
		          
		          
		        </div>
		      </div>
		    </div>

		    <div class="navbar-end">
		      <div class="navbar-item">
		        <div class="buttons">
		          <a class="button is-link">
		            <strong>Sign up</strong>
		          </a>
		          <a class="button is-light">
		            Log in
		          </a>
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