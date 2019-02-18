import React, { Component } from 'react';
import luz from '../images/luz.jpg'

import { Link } from 'react-router-dom';


class ListOfNotes extends Component {
  render() {
    return (
     
      <div>
       <div>
          <img src={luz} className="cover_image"/>
      </div>
      	Lista de notas
      	<div>
      		<p>Proyecto</p>
      		<p>Notas</p>
      	</div>

    	<table class="table">
		  <thead>
		    <tr>
		      <th><abbr title="Fecha">Fecha</abbr></th>
		      <th><abbr title="Periodo">Periodo</abbr></th>
		      <th><abbr title="Lugar">Lugar</abbr></th>    
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>15-marzo-2018</td>
		      <td>3 meses</td>
		      <td>San Luis Potosí</td>
		    </tr>
		    <tr>
		      <td>19-marzo-2018</td>
		      <td>3 meses</td>
		      <td>San Luis Potosí</td>
		    </tr>  
		  </tbody>
		</table>
		<div>
			<Link to='/addnotes'><button class="button is-link is-small">Agregar Nota</button></Link>
		</div>
		


      </div>
    );
  }
}

export default ListOfNotes;