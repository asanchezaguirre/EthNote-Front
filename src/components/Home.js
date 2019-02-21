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
          <p className = "title is-3 has-text-white is-spaced">UNA APP PARA LA INVESTIGACIÓN CUALITATIVA</p>
          <p className = "subtitle is-5 has-text-white">EthNote es una herramienta de recopilación de datos para investigadores
              en campo
          </p>
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
