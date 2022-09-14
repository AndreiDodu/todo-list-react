import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <form className="form-group m-auto w-50">
        <h3>Login</h3>
        <label>Username</label>
        <input className="form-control" type={'text'} name="username" />
        <label>Password</label>
        <input className="form-control" type={'text'} name="password" />
        <button className="btn btn-primary" type="submit">
          Sign-in
        </button>
      </form>
    );
  }
}

export default LoginForm;
