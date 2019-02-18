import React, { Component } from 'react';
import metro from '../images/metro.jpg'
import { Tile } from "react-bulma-components/full";

import { Link } from 'react-router-dom';

class ListOfProjects extends Component {

  render() {
    console.log(localStorage.getItem('token'))


    return (
      <div>
      	<div>
          <img src={metro} is-3by1/>
        </div>
      	Lista de proyectos

      	<div class="tile is-vertical is-2">
      		<div class="tile">
  		      	<div class="tile is-parent is-vertical">
  			        <article class="tile is-child notification is-dark">
  			          <p class="title">Titulo</p>
  			          <p class="subtitle">Objetivo</p>
  			          <p class="subtitle">Categorias</p>
  			        </article>   
  		      	</div>
  		      </div>
  		  </div>
		
	  	  <div>
      		<Link to='/addproject'><button class="button is-link is-small">Agregar Proyecto</button></Link>
      	</div>
      	<div>
      		<button class="button is-link is-small">Borrar Proyecto</button>
		    </div>      
      </div>
    );
  }
}

export default ListOfProjects;

