import React from 'react';
import StudySidebarContainer from './study_sidebar_container';
import FontAwesome from 'react-fontawesome';

class StudyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      flipped: false
    };
    this.switchSidesWithTransition = this.switchSidesWithTransition.bind(this);
    this.flip = this.flip.bind(this);
  }

  flip() {
    const { flipped } = this.state;
    this.setState({
      flipped: !flipped
    });
  }

  switchSidesWithTransition(transition) {
    const { flipped } = this.state;
    let card = document.getElementById("check");
    let flipper = document.getElementById("flipper");
    if (transition) {
      card.checked = !flipped;
    } else {
      flipper.classList.toggle("notransition");
      card.checked = !flipped;
      setTimeout(() => {
        flipper.classList.toggle("notransition");
      }, 3);
    }

    this.flip();
  }

  studyCard(score) {
    const { createConf, getMastery, cards, deckId, numCards, confs } = this.props;
    const { curIdx } = this.state;

    // this is the frontend way, much faster, but maybe computationally wrong with Ruby's floor division
    // look at  "Add mastery route, mastery now up to date" commit for comments
    let curCardId = cards[curIdx].id;
    createConf( { conf: { card_id: curCardId, score: score}});
    this.setState({ curIdx: (curIdx + 1) % cards.length});
    this.switchSidesWithTransition(false);

    setTimeout(() => { // Potential bugs in updating the mastery avoided here
      getMastery(deckId);
    }, 100);
  }

  componentDidMount() {
    const { fetchDeck, deckId } = this.props;
    fetchDeck(deckId);
  }

  render() {
    const { createConf, deck, cards } = this.props;
    const { curIdx, flipped } = this.state;
    if (deck) {
      let buttons = flipped ? (
        <div className="study-prompt">
          <p> How well did you know this?</p>
          <div className="study-buttons">
            <button id="study-1" onClick={() => this.studyCard(1)}>
              1
              <small>Not at all</small>
            </button>
            <button id="study-2" onClick={() => this.studyCard(2)}>2</button>
            <button id="study-3" onClick={() => this.studyCard(3)}>3</button>
            <button id="study-4" onClick={() => this.studyCard(4)}>4</button>
            <button id="study-5" onClick={() => this.studyCard(5)}>
              5
              <small>Perfectly</small>
            </button>
          </div>
        </div>
      ) : (
        <div className="study-prompt">
          <p>&nbsp;</p>
          <div className="study-buttons">
            <button id="reveal" onClick={() => this.switchSidesWithTransition(true)}>
              Reveal Answer
            </button>
          </div>
        </div>
      );
      return (
        <div className="study-show-page">
          <div className="nav-sidebar">
            <button
              onClick= {() => this.props.history.push(`/decks`)}
              className="nav-sidebar-logo">
            </button>
            <button
              onClick= {() => this.props.history.push(`/decks/${deck.id}`)}>
              <FontAwesome className="fas fa-book" name="book" size="2x"/>
            </button>
            <button
              onClick= {() => this.props.history.push(`/search`)}>
              <FontAwesome className="fas fa-search" name="search" size="2x"/>
            </button>
          </div>

          <StudySidebarContainer curIdx={curIdx} />

          <div className="study-card">
            <label className="card-show">
              <input id="check" type="checkbox"
                onClick={() => this.flip()} />
            	<div id="flipper" className="flipper">
            		<div className="front">
                  { cards[curIdx].front }
            		</div>
            		<div className="back">
                  { cards[curIdx].back }
            		</div>
            	</div>
            </label>
            {buttons}
          </div>
        </div>
      );
    } else {
      return (
        <div className="study-show-page"></div>
      );
    }
  }
}

export default StudyShow;
