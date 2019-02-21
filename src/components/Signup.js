import React, { Component } from 'react';
import { Form } from "react-bulma-components/full";


class Signup extends Component {

   onSubmitHandle = (e) => {
    e.preventDefault();

    const API_URL = "https://stormy-falls-13377.herokuapp.com/api/v1/"
    fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phoneNumber: e.target.phoneNumber.value,
        occupation: e.target.occupation.value,
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data.message === "User created succesfully") {
        alert("You have successfully registered")
        this.props.history.push("/login");
      }
    })
  }
 

  render() {
    return (
      
        <div className="fondo__signup">
          <form onSubmit={ this.onSubmitHandle } className="signup_bg">
            <div className ="field_signup">
              <label className ="label">Nombre</label>
              <div className ="control has-icons-left has-icons-right">
                <input name="name" className ="input" type="text" placeholder="Text input" />
                <span className ="icon is-small is-left">
                  <i className ="fas fa-user"></i>
                </span>
                <span className ="icon is-small is-right">
                  <i className ="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className ="field_signup">
              <label className ="label">Email</label>
              <div className ="control has-icons-left has-icons-right">
                <input name="email" className ="input" type="email" placeholder="Email input" />
                <span className ="icon is-small is-left">
                  <i className ="fas fa-envelope"></i>
                </span>
                <span className ="icon is-small is-right">
                  <i className ="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className ="field_signup">
              <label className ="label">Password</label>
              <div className ="control has-icons-left has-icons-right">
                <input name="password" className ="input" type="password" placeholder="Email input" />
                <span className ="icon is-small is-left">
                  <i className ="fas fa-lock"></i>
                </span>
                <span className ="icon is-small is-right">
                  <i className ="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className ="field_signup">
              <label className ="label">Número Telefónico</label>
              <div className ="control has-icons-left has-icons-right">
                <input name="phoneNumber" className ="input" type="tel" placeholder="Num Telefónico input" />
                <span className ="icon is-small is-left">
                  <i className ="fas fa-phone"></i>
                </span>
                <span className ="icon is-small is-right">
                  <i className ="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className ="field_signup">
              <label className ="label">Occupation</label>
              <div className ="control">
                <div className ="select">
                  <select name="occupation">
                    <option>Seleccionar estudiante</option>
                    <option>Investigador</option>
                    <option>Profesor</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>
            </div>
            <div className ="field is-grouped">
              <div className ="control">
                <button type='submit'  variant='contained' className ="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
     
    );
  }
}

export default Signup;