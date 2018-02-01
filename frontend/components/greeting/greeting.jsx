import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  handleLogout(e) {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    if (currentUser) {
      return (
        <div className="nav-greeting">
          <p>Hi, {`${currentUser.username}`}</p>
          <button onClick={(e) => this.handleLogout(e)}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-greeting">
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
