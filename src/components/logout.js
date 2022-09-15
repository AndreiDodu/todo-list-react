import { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
  }

  render() {
    return <div>You have successfully logged out</div>;
  }
}

export default Logout;
