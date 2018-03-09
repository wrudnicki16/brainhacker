import React from 'react';
import StudySidebarContainer from './study_sidebar_container';

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
      }, 600);
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
    getMastery(deckId);
    this.switchSidesWithTransition(false);
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
        <div>
          <p> How well did you know this?</p>
          <div className="study-buttons">
            <button onClick={() => this.studyCard(1)}>
              Not at all
            </button>
            <button onClick={() => this.studyCard(2)} />
            <button onClick={() => this.studyCard(3)} />
            <button onClick={() => this.studyCard(4)} />
            <button onClick={() => this.studyCard(5)}>
              Perfectly
            </button>
          </div>
        </div>
      ) : (
        <div className="study-buttons">
          <button onClick={() => this.switchSidesWithTransition(true)}>
            Reveal Answer
          </button>
        </div>
      );
      return (
        <div className="study-show-page">
          <div className="nav-sidebar">

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
