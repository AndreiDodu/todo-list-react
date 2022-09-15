import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import classes from '../app.module.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      continue: false,
      nameIsValid: true,
      usernameIsValid: true,
      emailIsValid: true,
      passwordIsValid: true,
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Object.values(e.target.elements));
    const elements = Object.values(e.target.elements).filter(
      (item) =>
        item.type === 'text' ||
        item.type === 'email' ||
        item.type === 'password'
    );
    const isFormValid = elements.every((ele) => {
      return this.isValid(ele);
    });

    console.log(isFormValid, elements);
    if (isFormValid) {
      this.props.registerAndLogin(this.packageThem(elements));
      this.setState({ continue: true });
    } else {
      let status = {};
      elements.forEach((item) => {
        status = {
          ...status,
          [item.name + 'IsValid']: this.isValidInputValue(item.value),
        };
      });
      this.setState(status);
    }
  };

  isValid = (ele) => {
    return this.isValidInputValue(ele.value);
  };

  isValidInputValue = (str) => {
    return str.length >= 5;
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  packageThem = (elements) => {
    let result = {};
    elements.forEach((element) => {
      result = { ...result, [element.name]: element.value };
    });
    console.log('The package:', result);
    return result;
  };

  onBlurHandler = (e) => {
    this.setState({
      [e.target.name + 'IsValid']:
        e.target.type !== 'email'
          ? this.isValidInputValue(e.target.value)
          : this.validateEmail(e.target.value),
    });
  };
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.continue && <Navigate to="/todo" />}
        <form
          className="form-group m-auto w-50"
          onSubmit={this.onSubmitHandler}
        >
          <h3>Register</h3>
          <div>
            <label htmlFor="name">
              Name
              {!this.state.nameIsValid && (
                <span className={classes.error}>invalid</span>
              )}
            </label>
          </div>
          <div>
            <input
              className={
                'form-control ' + (!this.state.nameIsValid && classes.error)
              }
              type="text"
              name="name"
              onBlur={this.onBlurHandler}
              onChange={this.onChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="username">
              Username
              {!this.state.usernameIsValid && (
                <span className={classes.error}>invalid</span>
              )}
            </label>
          </div>
          <div>
            <input
              className={
                'form-control ' + (!this.state.usernameIsValid && classes.error)
              }
              type="text"
              name="username"
              onBlur={this.onBlurHandler}
              onChange={this.onChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="email">
              E-mail
              {!this.state.emailIsValid && (
                <span className={classes.error}>invalid</span>
              )}
            </label>
          </div>
          <div>
            <input
              className={
                'form-control ' + (!this.state.emailIsValid && classes.error)
              }
              type="email"
              name="email"
              onBlur={this.onBlurHandler}
              onChange={this.onChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="password">
              Password
              {!this.state.passwordIsValid && (
                <span className={classes.error}>invalid</span>
              )}
            </label>
          </div>
          <div>
            <input
              className={
                'form-control ' + (!this.state.passwordIsValid && classes.error)
              }
              type="password"
              name="password"
              onBlur={this.onBlurHandler}
              onChange={this.onChangeHandler}
            />
          </div>

          <div>
            <button className="btn btn-primary" type="submit">
              Sign-up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
