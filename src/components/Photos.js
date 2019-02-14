import React, { Component } from 'react';
import iglesia from '../images/iglesia.jpg'


class Photos extends Component {
  render() {
    return (
      <div>
      	
	    <div>
	        <img src={iglesia} is-3by1/>
	    </div>
      	Lista de fotografías
      	<div class="tile is-vertical is-2">
      		<div class="tile">
  		      	<div class="tile is-parent is-vertical">
  			        <article class="tile is-child notification is-dark">
  			          <p class="title">Foto</p>
  			          <p class="title">Descripción</p> 
  			        </article>   
  		      	</div>
  		    </div>	   
        </div>
      </div>
    );
  }
}

export default Photos;