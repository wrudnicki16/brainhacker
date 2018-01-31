import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log("state",state);
  console.log("ownProps!!!", ownProps);
  let path = ownProps.location.pathname;
  return {
    loggedIn: state.currentUser ? true : false,
    errors: state.errors,
    formType: processPath(path)
  };
};

const processPath = (path) => {
  return path === "/login" ? "login" : "signup";
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let path = ownProps.location.pathname;
  let formType = processPath(path);
  let processForm = formType === "login" ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
