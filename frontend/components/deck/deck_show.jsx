import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Redirect } from 'react-router';
import CardIndexContainer from '../card/card_index_container';

class DeckShow extends React.Component {
  componentDidMount() {
    const { deckId, decks } = this.props;
    console.warn("component mounted HERE");
    this.props.fetchDeck(this.props.deckId).then(console.warn);
  }

  deleteDeck(deck) {
    const { deleteDeck, deckId, decks } = this.props;
    deleteDeck(deckId).then(() => this.props.history.push("/decks")); // maybe use a selector here to find the most recent last deck.
  }

  render() {
    const { deleteDeck, decks, deckId } = this.props;
    let deck = decks[deckId];
    return deck ? (
      <div className="deck-show-page">
        <div className="deck-header">
          <button onClick={() => this.deleteDeck(deck)} className="deck-delete">
            <FontAwesome className="far fa-trash-alt" name="trash" size="5x"/>
          </button>
          {deck.title}
          <button className="deck-study">
            Study
          </button>
        </div>
        <div className="deck-cards-divider"></div>
        <CardIndexContainer />
      </div>
    ) : (
        <div className="deck-show-page"></div>
    );
  }
}

export default DeckShow;
