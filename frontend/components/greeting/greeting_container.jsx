import { connect } from 'react-redux';
import { logoutAction } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logoutAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
