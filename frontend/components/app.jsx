import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { logout } from '../actions/session_actions';
import DeckIndexSidebar from './deck/deck_index_sidebar';

const App = () => (
  <div>
    <header>
      <div className="nav-logo">
        <div className="nav-logo-img"></div>
        <h1>Brainhacker</h1>
      </div>
      <GreetingContainer />
    </header>
    <div className="login-page">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/decks" component={DeckIndexSidebar} />
    </div>
  </div>
);

export default App;
