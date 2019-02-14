import React, { Component } from 'react';
import { Input } from "react-bulma-components/full";

import { Link } from 'react-router-dom';


class Login extends Component {
	state = {
		error: {
			status: false,
			message: ""
		}
	}

	onSubmit = (e) => {
		e.preventDefault();

		const API_URL = "https://stormy-falls-13377.herokuapp.com/api/v1/"

		fetch(`${ API_URL }/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			 },
		      body: JSON.stringify({
		        email: e.target.email.value,
		        password: e.target.password.value
		      })
		    })
		    .then(response => response.json())
		    .then(data => {
		      if(typeof data.token !== "undefined") {

		        localStorage.setItem("token", data.token);
		        const url = window.decodeURIComponent(this.props.location.search);
		        this.props.history.push("/projects");

		      } else {
		        this.setState({
		          error: {
		            status: true,
		            message: data.message
		          }
		        })
		      }
		    })
		    .catch(e => alert(e));
		  }



  render() {
    return (
      	<div className="fondo__login">
	  			<div className= "text__front">
	  			<h1>ETH</h1>
	  			<h1>NOTE</h1>
	  				<form onSubmit={ this.onSubmit }>
	                    <div class="field">
						  <p class="control has-icons-left has-icons-right">
						    <input name='email' class="input" type="email" placeholder="Email"/>
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
						    <input name='password' class="input" type="password" placeholder="Password"/>
						    <span class="icon is-small is-left">
						      <i class="fas fa-lock"></i>
						    </span>
						  </p>
						</div>
						{ this.state.error.status && <p>{ this.state.error.message }</p>}
	                    <button class="button">Login</button>
	                    <Link to='/signup'><div>Sign Up</div></Link>
                    </form>
                </div>  
	  	</div>
      	
         );
  }
}

export default Login;