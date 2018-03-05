import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { logout } from '../actions/session_actions';
import DeckIndexSidebarContainer from './deck/deck_index_sidebar_container';
import DeckFormContainer from './deck/deck_form_container';
import DeckShowContainer from './deck/deck_show_container';
import StudyShowContainer from './study/study_show_container';
const App = () => (
  <div>
    <header>
      <div className="nav-logo">
          <Link to="/decks" className="nav-logo-img" />
          <Link to="/decks"><h1>Brainhacker</h1></Link>
      </div>
      <GreetingContainer />
    </header>
    <div className="main-page">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/decks" component={DeckIndexSidebarContainer} />
        <ProtectedRoute path="/study/:deckId" component={StudyShowContainer} />
        <AuthRoute path="/" component={SessionFormContainer} />
      </Switch>
      <Switch>
        <ProtectedRoute exact path="/decks/new" component={DeckFormContainer} />
        <ProtectedRoute exact path="/decks/:deckId" component={DeckShowContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
