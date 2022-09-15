import React, { Component } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './app.module.css';

class MainMenu extends Component {
  gotoSignUp = (e) => {
    e.preventDefault();
    const navigate = useNavigate();
    navigate('/user/register');
  };

  render() {
    return (
      <div className={classes.mainmenu}>
        <div className={classes.authentication}>
          {this.props.user && (
            <span className={classes.username}>{this.props.user.username}</span>
          )}
          {!this.props.isLoggedIn() && (
            <div>
              <NavLink to={'/signup'}>Sign-up</NavLink>
              <NavLink to={'/signin'}>Sign-in</NavLink>
            </div>
          )}{' '}
          <div>
            {this.props.isLoggedIn() && (
              <NavLink to={'/logout'}>Logout</NavLink>
            )}
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default MainMenu;
