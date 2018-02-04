import React from 'react';
import FontAwesome from 'react-fontawesome';

class DeckShow extends React.Component {
  removeDeck(deck) {
    const { removeDeck, deckId } = this.props;
    removeDeck(deckId);
    this.props.history.push('/decks');
  }

  render() {
    const { removeDeck, fetchDeck, deck, deckId, cards } = this.props;
    return (
      <div className="deck-show-page">
        <div className="deck-header">
          <button onClick={() => this.removeDeck(deck)} className="deck-delete">
            <FontAwesome className="far fa-trash-alt" name="trash" size="5x"/>
          </button>
          { deck ? deck.title : null }
          <button className="deck-study">
            Study
          </button>
        </div>
        <div className="deck-cards-divider"></div>
        <div className="deck-cards">
          Some cards goin on
        </div>
      </div>
    );
  }
}

export default DeckShow;
