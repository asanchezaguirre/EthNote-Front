import React, { Component } from 'react';
import barrio from '../images/barrio-chino.jpg'


class EditProject extends Component {
  render() {
    return (
      <div>
      	<div>
          <img src={barrio} className="cover_image"/>
        </div>
      	Editar proyecto
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
              <label class="label">Tema</label>
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
        <div class="field">
              <label class="label">Categorías</label>
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
        <button class="button is-link is-small">Editar Proyecto</button>
      </div>
    );
  }
}

export default EditProject;