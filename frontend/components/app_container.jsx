import { connect } from 'react-redux';
import App from './app';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }, ownProps) => {
  let studying = ownProps.location.pathname.indexOf("/study") > -1;
  console.warn(ownProps.location.pathname.indexOf("/study"));
  return {
    studying
  };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(App));
