import React, { Component } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

class MainMenu extends Component {
  gotoSignUp = (e) => {
    e.preventDefault();
    const navigate = useNavigate();
    navigate('/user/register');
  };

  render() {
    return (
      <React.Fragment>
        <NavLink to={'/signup'}>Sign-up</NavLink> |{' '}
        <NavLink to={'/signin'}>Sign-in</NavLink>
      </React.Fragment>
    );
  }
}

export default MainMenu;
