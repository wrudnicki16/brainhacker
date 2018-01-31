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

  componentWillReceiveProps(nextProps){
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    console.log(user);
    console.log("state!", this.state);
    this.props.processForm(user);
    this.setState({user: { username: "", password: ""}});
    console.log("state again!", this.state);
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
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>Username:
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.username} />
              </label>
              <label>Password:
                <input onChange={(e) => this.handleChange(e)} type="password" value={this.state.password} />
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
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.username} />
              </label>
              <label>Password:
                <input onChange={(e) => this.handleChange(e)} type="password" value={this.state.password} />
              </label>
              // Add an email!
              <input type="submit" value="Sign Up" />
            </form>
            <p><Link to="/signup">Sign up</Link></p>
          </div>
        );
      }
    }
  }
}


export default SessionForm;
