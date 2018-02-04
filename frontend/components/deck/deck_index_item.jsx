import React from 'react';
import { withRouter } from 'react-router';

class DeckIndexItem extends React.Component {

  handleClick() {
    const deckId = this.props.deck.id;
    this.props.history.push(`/decks/${deckId}`);
  }

  render () {
    const { id, title } = this.props.deck;
    return (
      <div className="deck-select"
           onClick={() => this.handleClick()}>
        <div className="deck-content">
          {title}
        </div>
        <div className="deck-divider"></div>
      </div>
    );
  }
}

export default withRouter(DeckIndexItem);
