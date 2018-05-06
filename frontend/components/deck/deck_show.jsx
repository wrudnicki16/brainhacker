import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Redirect } from 'react-router';
import CardIndexContainer from '../card/card_index_container';
import DeleteModalContainer from '../modal/delete_modal_container';

class DeckShow extends React.Component {
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
          <div className="deck-title">
            <DeleteModalContainer />
            <span className="deck-title-span">{deck.title}</span>
          </div>
          <button onClick={() => this.props.history.push(`/study/${deckId}`)}
                  className="deck-study">
                  Study
          </button>
        </div>
        <div className="deck-mastery">Mastery: {`${deck.mastery_score}%`}</div>
        <div className="deck-cards-divider"></div>
        <CardIndexContainer />
        <span id="saved-toast" className="hidden">Saved!</span>
      </div>
    ) : (
        <div className="deck-show-page"></div>
    );
  }
}

export default DeckShow;
