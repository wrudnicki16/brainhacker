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
  // componentWillReceiveProps() {
  //   this.props.history.push("/");
  // }

  componentWillUnmount() {
    this.props.clearErrors();
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
    e.preventDefault();
    if (e.target.type === "text") {
      let username = e.target.value;
      this.setState(merge({}, this.state, {user: { username: username }}));
    } else {
      let password = e.target.value;
      this.setState(merge({}, this.state, {user: { password: password }}));
    }
  }
  renderErrors() {
    console.log(this.props);
    console.log(this.props.errors);
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    let path = this.props.location.pathname;
    if (this.props.loggedIn) {
      path.replace("/");
    } else {
      if (path === "/login" || path ==="/"){
        return (
          <div className="login-form-container">
            <div className="login-page-header">
              <h1>Join the team</h1>
              <p>Study faster, remember longer.</p>
              <p>Experience the bliss of comprehension.</p>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              {this.renderErrors()}
              <h1>Login</h1>
                <input type="text"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.user.username}
                  placeholder="Username"
                  className="login-input" />
                <input type="password"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.user.password}
                  placeholder="Password"
                  className="login-input" />
              <input type="submit" value="Login" />
              <p>Not signed up? <Link to="/signup">Sign up</Link></p>
            </form>
          </div>
        );
      } else {
        return (
          <div className="login-form-container">
            <div className="login-page-header">
              <h1>Join the team</h1>
              <p>Study faster, remember longer.</p>
              <p>Experience the bliss of comprehension.</p>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              {this.renderErrors()}
              <h1>Sign Up</h1>
                <input type="text"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.user.username}
                  placeholder="Username"
                  className="login-input" />
                <input type="password"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.user.password}
                  placeholder="Password"
                  className="login-input" />
              <input type="submit" value="Sign Up" />
              <p>Already a user? <Link to="/login">Login</Link></p>
            </form>
          </div>
        );
      }
    }
  }
}


export default SessionForm;
