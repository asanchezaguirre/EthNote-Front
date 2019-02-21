import React, { Component } from 'react';
import iglesia from '../images/iglesia.jpg'


class Note extends Component {
  constructor(props){
    super(props);
    this.state= {
      note:[],
      text:'',
      text1:'',
    }
  }

componentDidMount(){
  const noteId = this.props.match.params.noteId
  this.showNote(noteId)
}


  showNote = noteId => {
    //console.log(noteId)
  const API_URL = 'https://stormy-falls-13377.herokuapp.com/api/v1'
    fetch(`${API_URL}/notes/${this.props.match.params.noteId}`, {
      method: 'GET',
      headers: {
        "Authorization": `barear ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data.data.listOfText[0].text)

        this.setState({
          note: data.data,
          text: data.data.listOfText[0].text,
          text1: data.data.listOfText[1].text

        })

      })
      .catch(e => alert(e))   
  }

  render() { 
    
    return (
      <div className="note-background">
      	<div className="note">
          <p className="title is-3">Detalle de nota </p>
        {
          <div className ="tile is-vertical">
            <div className ="tile">
                <div className ="tile is-parent is-vertical">
                  <article className ="tile is-child notification note">
                    <p className ="subtittle is-4 has-text-weight-semibold">Lugar: {this.state.note.location}</p>
                    <p className ="subtittle is-4 has-text-weight-semibold">Fecha:{this.state.note.date}</p> 
                    <p className ="subtittle is-4 has-text-weight-semibold">Periodo: {this.state.note.period}</p>
                    <div className="container_note">
                      <div className="note">
                        <p className ="subtittle is-4 has-text-weight-semibold">Nota Descriptiva:</p>
                        <p className ="subtittle is-4 has-text-weight-semibold">{this.state.text}</p>
                      </div>
                      <div className="note">
                        <p className ="subtittle is-4 has-text-weight-semibold">Nota Personal:</p>
                        <p className ="subtittle is-4 has-text-weight-semibold">{this.state.text1}</p>
                      </div>
                    </div>
                  </article>   
                </div>
            </div>     
          </div>
          }
      </div>
    </div>
      	
    );
  }
}

export default Note;