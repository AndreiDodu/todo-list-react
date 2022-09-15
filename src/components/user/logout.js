import { Component } from 'react';
import classes from '../app.module.css';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
  }

  render() {
    return (
      <div className={classes.textCenter + ' ' + classes.padding1}>
        You have successfully logged out
      </div>
    );
  }
}

export default Logout;
