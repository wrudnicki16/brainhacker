import React from 'react';
import DeckIndexItem from './deck_index_item';
import { button } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { createDeck } from '../../util/deck_api_util';


class DeckIndexSidebar extends React.Component {

  componentDidMount() {
    this.props.fetchDecks();
  }

  // componentWillReceiveProps(newProps) {
  //   console.log("###############################");
  //   console.log(newProps);
  //   console.log(this.props);
  //   if (this.props !== newProps) {
  //     this.props.fetchDecks();
  //   }
  // }


  render() {
    if (this.props) {
      let decks = this.props.decks.map((deck) => <DeckIndexItem key={deck.id} deck={deck} />);
      return (
        <div className="decks-sidebar">
          <div className="decks-sidebar-header">
            <h1>Decks</h1>
            <button onClick={() => this.props.history.push("/decks/new")}><FontAwesome className="fas fa-plus" name="plus"/> Add Deck</button>
          </div>
          <div className="decks-body">
            {decks}
          </div>
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
