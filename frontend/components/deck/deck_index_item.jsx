import React from 'react';
import { withRouter } from 'react-router';

class DeckIndexItem extends React.Component {

  handleClick() {
    const deckId = this.props.deck.id;
    this.props.history.push(`/decks/${deckId}`);
    if (document.documentElement.offsetWidth < 815) {
      let deckShow = document.getElementsByClassName("deck-show-page")[0];
      let mainPageDecks = document.getElementsByClassName("main-page-decks")[0];
      let classList = document.getElementsByClassName('class-list')[0];
      deckShow.classList.add("on-top");
      mainPageDecks.classList.remove("on-top");
      classList.classList.add("on-top");
    }
  }

  render () {
    const { id, title } = this.props.deck;
    const { deck, activeDeck } = this.props;
    return (
      <div className="deck-select"
           onClick={() => this.handleClick()}>
        <div className={activeDeck ? "deck-content selected" : "deck-content"}>
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
