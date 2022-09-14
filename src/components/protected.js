import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Protected extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }

  render() {
    return this.state.isAuthenticated ? (
      this.props.children
    ) : (
      <Navigate to="/signin" replace />
    );
  }
}

export default Protected;
