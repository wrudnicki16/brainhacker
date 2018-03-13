import React from 'react';
import { withRouter } from 'react-router';

class DeckIndexItem extends React.Component {

  handleClick() {
    const deckId = this.props.deck.id;
    this.props.history.push(`/decks/${deckId}`);
  }

  render () {
    const { id, title } = this.props.deck;
    const { deck } = this.props;
    return (
      <div className="deck-select"
           onClick={() => this.handleClick()}>
        <div className="deck-content">
          <li className="deck-content-title">{title}</li>
          <li className="deck-content-first">Cards: {deck.numCards}</li>
          <li className="deck-list">{`Mastery: ${deck.mastery_score}%`}</li>
        </div>
        <div className="deck-divider"></div>
      </div>
    );
  }
}

export default withRouter(DeckIndexItem);
