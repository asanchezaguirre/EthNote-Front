import React, { Component } from 'react';
import madero from '../images/madero.jpg'
import isLoggedIn from '../utils/isLoggedIn'

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(localStorage.getItem('token'))
    return (
      <div className = "home_cover">
      <div className = "signup_bg">
         <div>
          <h1 className = "title is-3 has-text-white">UNA APP PARA LA INVESTIGACIÓN CUALITATIVA</h1>
        </div>
        <div>
          <h3 className = "title is-6 has-text-white">EthNote es una herramienta de recopilación de datos para investigadores
              en campo
          </h3>
        </div>
        {!isLoggedIn() && (
               <Link to="/login"><button class="button is-link is-medium">Log In</button></Link>  
              )}
              {isLoggedIn() && (
                  <p></p>
            )}
        </div>
       
      </div>
    );
  }
}

export default Home;
