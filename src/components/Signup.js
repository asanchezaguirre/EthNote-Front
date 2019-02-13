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
          <form onSubmit={ this.onSubmitHandle }>
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control has-icons-left has-icons-right">
                <input name="name" class="input is-success" type="text" placeholder="Text input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p class="help is-success">El nombre de usuario está disponible</p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input name="email" class="input is-success" type="email" placeholder="Email input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help is-succes">Este email está disponible</p>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input name="password" class="input is-success" type="password" placeholder="Email input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Número Telefónico</label>
              <div class="control has-icons-left has-icons-right">
                <input name="phoneNumber" class="input is-danger" type="tel" placeholder="Num Telefónico input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Occupation</label>
              <div class="control">
                <div class="select">
                  <select name="occupation">
                    <option>Seleccionar estudiante</option>
                    <option>Investigador</option>
                    <option>Profesor</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox"/>
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button type='submit'  variant='contained' class="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
     
    );
  }
}

export default Signup;