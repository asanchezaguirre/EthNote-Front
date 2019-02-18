import React, { Component } from 'react';
import luchador from '../images/luchador.jpg'


class AddNotes extends Component {
  render() {
    return (
      <div>
      	<div>
          <img src={luchador} className="cover_image"/>
        </div>
      	Agregar notas
      	<div>
      		<p>Ubicación</p>
      		<p>Fecha</p>
      		<p>Periodo</p>
      	</div>
      	<textarea class="textarea" placeholder="10 lines of textarea" rows="10" class="textarea is-small"></textarea>
      	<textarea class="textarea" placeholder="10 lines of textarea" rows="10" class="textarea is-small"></textarea>
      	<input class="input is-success" type="text" placeholder="Fotografías" />
      	<button class="button is-link is-small">Agregar Nota</button>
      </div>
    );
  }
}

export default AddNotes;