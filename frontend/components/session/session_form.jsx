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
    console.log("hi");
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
    if (this.props.errors) {
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
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Login</Link>;
    }
  }

  handleDemoUser() {
    const user = { user: { username: "Demo", password: "password" }};
    this.props.login(user);
  }


  render() {
    let path = this.props.location.pathname;
    console.log(this.props.clearErrors);
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
            <form>
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
              <input type="submit"
                onClick={(e) => this.handleSubmit(e)}
                value="Login" />
              <input type="submit"
                onClick={() => this.handleDemoUser()}
                value="Demo"/>
              <p>Not signed up? <Link onClick={this.props.clearErrors} to="/signup">Sign up</Link></p>
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
            <form>
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
              <input type="submit"
                onClick={(e) => this.handleSubmit(e)}
                value="Sign Up" />
              <input type="submit"
                onClick={() => this.handleDemoUser()}
                value="Demo"/>
              <p>Already a user? <Link onClick={this.props.clearErrors} to="/login">Login</Link></p>
            </form>
          </div>
        );
      }
    }
  }
}


export default SessionForm;
