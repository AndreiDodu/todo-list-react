import React, { Component } from 'react';

class RegistrationForm extends Component {
  render() {
    return (
      <form className="form-group m-auto w-50">
        <h3>Register</h3>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input className="form-control" type="text" name="name" />
        </div>

        <div>
          <label>Username</label>
        </div>
        <div>
          <input className="form-control" type="text" name="username" />
        </div>

        <div>
          <label>E-mail</label>
        </div>
        <div>
          <input className="form-control" type="email" name="email" />
        </div>

        <div>
          <label>Password</label>
        </div>
        <div>
          <input className="form-control" type="password" name="password" />
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Sign-up
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
