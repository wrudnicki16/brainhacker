import React from 'react';
import DeckIndexItem from './deck_index_item';
import { button } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { createDeck } from '../../util/deck_api_util';


class DeckIndexSidebar extends React.Component {

  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    let activeDeck = this.props.activeDeck;
    if (this.props) {
      let decks = this.props.decks.map((deck) => <DeckIndexItem key={deck.id} deck={deck} activeDeck={deck.id === activeDeck}/>);
      return (
        <div className="main-page-decks">
          <div className="decks-sidebar">
            <div className="decks-sidebar-header">
              <h1>Decks</h1>
              <div className="decks-sidebar-buttons">
                <button onClick={() => this.props.history.push("/search")}>
                  <FontAwesome className="fas fa-search" name="search"/> Search
                </button>
                <button onClick={() => this.props.history.push("/decks/new")}>
                  <FontAwesome className="fas fa-plus" name="plus"/> Add Deck
                </button>
              </div>
            </div>
            <div className="decks-body">
                {decks}
              </div>
            </div>
          <div className="splash-overlay"><i className="fa fa-arrow-left"></i> &nbsp; &nbsp; View, Create Decks</div>
        </div>
      );
    } else {
      return (
        <div className="decks-sidebar"></div>
      );
    }
  }
}

export default DeckIndexSidebar;
