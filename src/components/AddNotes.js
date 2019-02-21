import React, { Component } from 'react';



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
      <div className="note-background">
          <form  className="addnote-form"onSubmit={this.onSubmit}>
          <div className="field_addnote">
            Agregar notas
            <div>
              <p>Ubicación</p><input name="location" className ="input is-success" type="text" placeholder="Ubicacion" />
              <p>Fecha</p><input name="date" className ="input is-success" type="date" placeholder="Fecha" />
              <p>Periodo</p><input name="period" className ="input is-success" type="text" placeholder="Periodo" />
            </div>
            <div className="container_addnote">
              <div className="children_addnote">
                <p>Nota descriptiva</p>
                <textarea name="listOfText1" className ="input" placeholder="10 lines of textarea" rows="10" className ="textarea is-small"></textarea>
              </div>
              <div className="children_addnote">
                <p>Nota personal</p>
                <textarea name="listOfText2" className ="input" placeholder="10 lines of textarea" rows="10" className ="textarea is-small"></textarea>
              </div>
            </div>
              <div>
                Agregar Fotografìas
              </div>
                
                      <input className ="file-input" type="file" name="listOfPhotos" placeholder="Nombre del archivo"/>
                      
            <button type='submit' className ="button is-link is-small">Agregar Nota</button>
          </div>
          </form>
      </div>
    );
  }
}

export default AddNotes;