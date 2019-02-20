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
      <div>
      	
	    <div>
	        <img src={iglesia} is-3by1/>
	    </div>
      	Detalle de nota 
      {
      	<div class="tile is-vertical is-2">
      		<div class="tile">
  		      	<div class="tile is-parent is-vertical">
  			        <article class="tile is-child notification is-dark">
  			          <p class="title">Lugar: {this.state.note.location}</p>
  			          <p class="title">Fecha: {this.state.note.date}</p> 
                  <p class="title">Periodo: {this.state.note.period}</p>
                  <p class="title">Nota Descriptiva: {this.state.text}</p>
                  <p class="title">Nota Personal: {this.state.text1}</p>
                 
                  
  			        </article>   
  		      	</div>
  		    </div>	   
        </div>
        }
      </div>
    );
  }
}

export default Note;