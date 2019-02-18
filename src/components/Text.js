import React, { Component } from 'react';
import perro from '../images/perrito.jpg'


class Text extends Component {
  render() {
    return (
      <div>
      	<div>
	        <img src={perro} className="cover_image"/>
	    </div>
      	Nota
      	<div class="tile is-vertical is-2">
      		<div class="tile">
  		      	<div class="tile is-parent is-vertical">
  			        <article class="tile is-child notification is-dark">
  			          <p>Ubicación</p>
			      	  <p>Fecha</p>
			      	  <p>Periodo</p> 
			      	  <p>Texto</p>
  			        </article>   
  		      	</div>
  		    </div>	   
        </div>
      </div>
    );
  }
}

export default Text;