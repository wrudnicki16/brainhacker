import React from 'react';
import StudySidebar from './study_sidebar';

class StudyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0
    };
  }

  studyCard() {
    const { createConf, cards } = this.props;
    const { curIdx } = this.state;
    createConf( { conf: { card_id: cards[curIdx]}});

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

          <StudySidebar curIdx={curIdx} />

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
              <button onClick={() => createConf({ conf: { card_id: curIdx, score: 1}})}>
                Not at all
              </button>
              <button onClick={() => createConf({ conf: { card_id: curIdx, score: 2}})} />
              <button onClick={() => createConf({ conf: { card_id: curIdx, score: 3}})} />
              <button onClick={() => createConf({ conf: { card_id: curIdx, score: 4}})} />
              <button onClick={() => createConf({ conf: { card_id: curIdx, score: 5}})}>
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
