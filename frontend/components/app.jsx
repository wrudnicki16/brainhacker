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
      <h1>Brainhacker</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/decks" component={DeckIndexSidebar} />
  </div>
);

export default App;
