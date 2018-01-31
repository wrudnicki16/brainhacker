import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  componentDidMount() {

  }

  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    if (currentUser) {
      return (
        <div className="nav-greeting">
          <p>Welcome, {`${currentUser.user.username}`}</p>
          <button onClick={() => logout()}>Logout</button>
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

export default Greeting;
