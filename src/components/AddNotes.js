import React, { Component } from 'react';
import luchador from '../images/luchador.jpg'


class AddNotes extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      local:'',
      error: {
        status: false,
        message: ""
      }
    }
  }



onSubmit = e => {

    e.preventDefault();

    const API_URL = "https://stormy-falls-13377.herokuapp.com/api/v1/"

    fetch(`${ API_URL }/notes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
         
       },
          body: JSON.stringify({
            location: e.target.location.value,
            date: e.target.date.value,
            period: e.target.period.value,
            project: this.props.data,
            listOfPhotos: e.target.listOfPhotos.value,
            listOfText1: e.target.listOfText1.value,
            listOfText2: e.target.listOfText2.value,

          
          })
          
        })

        .then(response => response.json())
        .then(data => {
          if(typeof data.token !== "undefined") {

            localStorage.setItem("token", data.token);
            const url = window.decodeURIComponent(this.props.location.search);
            if (url !== '') {
              this.props.history.push('/' + url.split('/')[1]);
            }else {
              this.props.history.push('/login')
            }
          }else {
            this.setState({
              error: {
                status: true,
                message: data.message
              }
            })
          }
        })
        .catch(e => alert(e));
        this.props.history.push('/notes')
        
      }


  render() {
    //console.log(this.props.data)
    return (
      <div>
        <div>
          <img src={luchador} className="cover_image"/>
        </div>
          <form onSubmit={this.onSubmit}>
            Agregar notas
            <div>
              <p>Ubicación</p><input name="location" class="input is-success" type="text" placeholder="Ubicacion" />
              <p>Fecha</p><input name="date" class="input is-success" type="text" placeholder="Fecha" />
              <p>Periodo</p><input name="period" class="input is-success" type="text" placeholder="Periodo" />
            </div>
            <textarea name="listOfText1" class="input" placeholder="10 lines of textarea" rows="10" class="textarea is-small"></textarea>
            <textarea name="listOfText2" class="input" placeholder="10 lines of textarea" rows="10" class="textarea is-small"></textarea>
              <div>
                Agregar Fotografìas
              </div>
                <form action='/api/images' method="post" enctype="multipart/form-data">              
                  <div class="file">
                    <label class="file-label">
                      <input class="file-input" type="file" name="image" placeholder="Nombre del archivo"/>
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                          Selecciona archivo…
                        </span>
                      </span>
                    </label>
                  </div>
                </form>
            <button type='submit' class="button is-link is-small">Agregar Nota</button>
          </form>
      </div>
    );
  }
}

export default AddNotes;