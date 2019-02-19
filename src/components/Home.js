import React, { Component } from 'react';
import madero from '../images/madero.jpg'
import isLoggedIn from '../utils/isLoggedIn'

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(localStorage.getItem('token'))
    return (
      <div>
      	<div>
          <img src={madero} className ="cover_image"/>
        </div>
        <div>
          <h4>UNA APP PARA LA INVESTIGACIÓN CUALITATIVA</h4>
        </div>
        <div>
          <h8>EthNote es una herramienta de recopilación de datos para investigadores
              en campo
          </h8>
        </div>
        {!isLoggedIn() && (
               <Link to="/login"><button class="button is-link is-medium">Log In</button></Link>  
              )}
              {isLoggedIn() && (
                  <p></p>
            )}
      </div>
    );
  }
}

export default Home;
