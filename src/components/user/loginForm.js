import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import classes from '../app.module.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameIsValid: true,
      usernameIsTouched: false,
      passwordIsValid: true,
      passwordIsTouched: false,
      continue: false,
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    if (this.isValidValue(username) && this.isValidValue(password)) {
      this.props
        .login({
          username: this.state.username,
          password: this.state.password,
        })
        .then((result) => {
          this.setState({ continue: true });
        });
    } else {
      this.validateFormAndUpdateState(
        ['username', 'password'],
        e.target.elements
      );
    }
  };

  validateFormAndUpdateState = (arr, elements) => {
    let state = {};
    arr.forEach((item) => {
      state = {
        ...state,
        [item + 'IsTouched']: true,
        [item + 'IsValid']: this.isValidValue(elements[item].value),
      };
    });

    this.setState(state);
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onBlurHandler = (e) => {
    this.setState({
      [e.target.name + 'IsTouched']: true,
      [e.target.name + 'IsValid']: this.isValidValue(e.target.value),
    });
  };

  isValidValue = (value) => {
    return value.trim().length >= 5;
  };

  render() {
    return (
      <div>
        {this.state.continue && <Navigate to="/todo" />}
        <form className="form-group m-auto w-50" onSubmit={this.submitHandler}>
          <h3>Login</h3>
          <label htmlFor="username">
            Username
            {!this.state.usernameIsValid && this.state.usernameIsTouched && (
              <span className={classes.error}>invalid</span>
            )}
          </label>
          <input
            className={
              !this.state.usernameIsValid && this.state.usernameIsTouched
                ? 'form-control my-1 ' + classes.error
                : 'form-control my-1'
            }
            type="text"
            name="username"
            value={this.state.username}
            onBlur={this.onBlurHandler}
            onChange={this.onChangeHandler}
          />
          <label htmlFor="password">
            Password
            {!this.state.passwordIsValid && this.state.passwordIsTouched && (
              <span className={classes.error}>invalid</span>
            )}
          </label>
          <input
            className={
              !this.state.passwordIsValid && this.state.passwordIsTouched
                ? 'form-control my-1 ' + classes.error
                : 'form-control my-1'
            }
            type="password"
            name="password"
            value={this.state.password}
            onBlur={this.onBlurHandler}
            onChange={this.onChangeHandler}
          />
          <button className="btn btn-primary" type="submit">
            Sign-in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
