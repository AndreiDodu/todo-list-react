import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Protected extends Component {
  render() {
    return this.props.isLoggedIn() ? (
      this.props.children
    ) : (
      <Navigate to="/signin" replace />
    );
  }
}

export default Protected;
