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
		       if (typeof data.token !== 'undefined') {
          localStorage.setItem('token', data.token)
          const url = window.decodeURIComponent(this.props.location.search)
          console.log(url)
          if (url !== '') {
            this.props.history.push('/' + url.split('/')[1] || '/')
          } else {
            this.props.history.push('/')
          }
        } else {
          this.setState({
            error: {
              status: true,
              message: data.message
            }
          })
        }
      })
      .catch(e => alert(e))
  }


  render() {
    return (
      	<div className="fondo__login">
	  			<div className= "text__front">
	  			<h1>ETH</h1>
	  			<h1>NOTE</h1>
	  				<form onSubmit={ this.onSubmit } className="buttons_bg">
	                    <div className ="field">
						  <p className ="control has-icons-left has-icons-right">
						    <input name='email' className ="input" type="email" placeholder="Email"/>
						    <span className ="icon is-small is-left">
						      <i className ="fas fa-envelope"></i>
						    </span>
						    <span className ="icon is-small is-right">
						      <i className ="fas fa-check"></i>
						    </span>
						  </p>
						</div>
						<div className ="field">
						  <p className ="control has-icons-left">
						    <input name='password' className ="input" type="password" placeholder="Password"/>
						    <span className ="icon is-small is-left">
						      <i className ="fas fa-lock"></i>
						    </span>
						  </p>
						</div>
						{ this.state.error.status && <p>{ this.state.error.message }</p>}
	                    <button className="button is-link is-normal">Login</button>
	                    <Link to='/signup'><button className ="button is-info is-normal">Sign Up</button></Link>
                    </form>
                </div>  
	  	</div>
      	
         );
  }
}

export default Login;