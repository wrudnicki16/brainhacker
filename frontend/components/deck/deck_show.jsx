import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Redirect } from 'react-router';
import CardIndexContainer from '../card/card_index_container';
import DeleteModalContainer from '../modal/delete_modal_container';
import Loader from '../loading';

class DeckShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  deleteDeck(deck) {
    const { deleteDeck, deckId, decks } = this.props;
    deleteDeck(deckId).then(() => this.props.history.push("/decks")); // maybe use a selector here to find the most recent last deck.
  }

  hideDeckShow() {
    let deckShow = document.getElementsByClassName("deck-show-page")[0];
    let mainPageDecks = document.getElementsByClassName("main-page-decks")[0];
    let deckTabs = document.getElementsByClassName("deck-tabs")[0];
    deckShow.classList.remove("on-top");
    mainPageDecks.classList.add("on-top");
    deckTabs.classList.remove("on-top");
  }

  render() {
    const { deleteDeck, decks, deckId } = this.props;
    let deck;
    JSON.stringify(decks) !== '{}' ? deck = decks[deckId] : deck;
    return deck && !this.state.loading ? (
      <div className="deck-show-page">
        <button className="deck-tabs visible-xs"
          onClick={() => this.hideDeckShow()}>
            <span className="caret"></span>
              &nbsp;
              Deck List
              &nbsp;
            <span className="caret"></span>
        </button>
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
        <div className="deck-show-page">
          <Loader />
        </div>
    );
  }
}

export default DeckShow;
