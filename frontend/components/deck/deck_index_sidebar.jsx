import React from 'react';
import DeckIndexItem from './deck_index_item';
import { Link } from 'react-router-dom';

class DeckIndexSidebar extends React.Component {

  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    console.log("check props deck", this.props);
    if (this.props) {
      let decks = this.props.decks.map((deck) => <DeckIndexItem key={deck.id} deck={deck} />);
      console.log("decks = ", decks);
      return (
        <div>
          <Link to="/decks/new">Add Deck</Link>
          <ul>
            {decks}
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default DeckIndexSidebar;
