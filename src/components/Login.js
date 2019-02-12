import React, { Component } from 'react';
import { Input } from "react-bulma-components/full";

import { Link } from 'react-router-dom';


class Login extends Component {
  render() {
    return (
      	<div className="fondo__login">
	  			<div className= "text__front">
	  			<h1>ETH</h1>
	  			<h1>NOTE</h1>
                    <div class="field">
					  <p class="control has-icons-left has-icons-right">
					    <input class="input" type="email" placeholder="Email"/>
					    <span class="icon is-small is-left">
					      <i class="fas fa-envelope"></i>
					    </span>
					    <span class="icon is-small is-right">
					      <i class="fas fa-check"></i>
					    </span>
					  </p>
					</div>
					<div class="field">
					  <p class="control has-icons-left">
					    <input class="input" type="password" placeholder="Password"/>
					    <span class="icon is-small is-left">
					      <i class="fas fa-lock"></i>
					    </span>
					  </p>
					</div>
                    <button class="button">Login</button>
                    <Link to='/signup'><div>Sign Up</div></Link>
                 </div>  
	  	</div>
      	
         );
  }
}

export default Login;