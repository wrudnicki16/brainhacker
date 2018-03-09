import React from 'react';
import StudySidebarContainer from './study_sidebar_container';

class StudyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0
    };
  }

  studyCard(score) {
    const { createConf, getMastery, cards, deckId, numCards, confs } = this.props;
    const { curIdx } = this.state;

    // this is the frontend way, much faster, but maybe computationally wrong with Ruby's floor division
    // if (!this.state.masteryScore) {
    //   this.setState({ masteryScore: deck.masteryScore });
    // }
    // const masteryScore = this.state.masteryScore;
    let curCardId = cards[curIdx].id;
    // let oldScore = confs[curCardId].score;
    // let sumScores = (masteryScore * (cards.count * 5)) / 100;
    // sumScores += (score - oldScore);
    // let newMasteryScore = (sumScores * 100) / (cards.count * 5);

    createConf( { conf: { card_id: curCardId, score: score}});
    this.setState({ curIdx: (curIdx + 1) % cards.length});
    // this.setState({ masteryScore: newMasteryScore});
    getMastery(deckId);
  }

  componentDidMount() {
    const { fetchDeck, deckId } = this.props;
    fetchDeck(deckId);
  }

  render() {
    const { createConf, deck, cards } = this.props;
    const { curIdx } = this.state;
    if (deck) {
      return (
        <div className="study-show-page">
          <div className="nav-sidebar">

          </div>

          <StudySidebarContainer curIdx={curIdx} />

          <div className="study-card">
            <label className="card-show">
              <input type="checkbox" />
            	<div className="flipper">
            		<div className="front">
                  { cards[curIdx].front }
            		</div>
            		<div className="back">
                  { cards[curIdx].back }
            		</div>
            	</div>
            </label>

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
