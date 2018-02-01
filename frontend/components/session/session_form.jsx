import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      }
    };
  }

  componentWillReceiveProps() {
    this.props.history.push("/");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
    this.setState(() => {
      return {user: { username: "", password: ""}};
    });
  }

  handleChange(e) {
    if (e.target.type === "text") {
      let username = e.target.value;
      this.setState(merge({}, this.state, {user: { username: username }}));
    } else {
      let password = e.target.value;
      this.setState(merge({}, this.state, {user: { password: password }}));
    }
  }


  render() {
    let path = this.props.location.pathname;
    if (this.props.loggedIn) {
      path.replace("/");
    } else {
      if (path === "/login"){
        return (
          <div>
            <h1>Login</h1>
            <form onSubmit={(e) => this.handleSubmit(e)} className="">
              <label>Username:
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.user.username} />
              </label>
              <label>Password:
                <input onChange={(e) => this.handleChange(e)} type="password" value={this.state.user.password} />
              </label>
              <input type="submit" value="Login" />
            </form>
            <p><Link to="/signup">Sign up</Link></p>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Sign Up</h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>Username:
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.user.username} />
              </label>
              <label>Password:
                <input onChange={(e) => this.handleChange(e)} type="password" value={this.state.user.password} />
              </label>
              // Add an email!
              <input type="submit" value="Sign Up" />
            </form>
            <p><Link to="/signup">Login</Link></p>
          </div>
        );
      }
    }
  }
}


export default SessionForm;
