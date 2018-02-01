import { Router, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Route } from 'react-router';


const Auth = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={(props) => {
      return (
        !loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      );
    }} />;
};

const mapStateToProps = (state, ownProps) => {
  return { loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
