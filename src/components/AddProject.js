import React, { Component } from 'react';
import latino from '../images/latino.jpg'


class AddProject extends Component {
  render() {
    return (
      <div>
      	<div>
          <img src={latino} is-3by1/>
        </div>
      	Agregar proyecto
      	<div class="field">
              <label class="label">Título</label>
              <div class="control has-icons-left has-icons-right">
                <input name="name" class="input is-success" type="text" placeholder="Text input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
        </div>
        <div class="field">
              <label class="label">Objetivo</label>
              <div class="control has-icons-left has-icons-right">
                <input name="name" class="input is-success" type="text" placeholder="Text input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
        </div>
      </div>
    );
  }
}

export default AddProject;

