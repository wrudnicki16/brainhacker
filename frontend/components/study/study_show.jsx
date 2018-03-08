import React from 'react';
import StudySidebar from './study_sidebar';

class StudyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0
    };
  }

  componentDidMount() {
    const { fetchDeck, deckId } = this.props;
    fetchDeck(deckId);
  }

  render() {
    const { createConf, deck, cards } = this.props;
    const { curIdx } = this.state;
    let flipped = true;
    debugger;
    if (deck) {
      return (
        <div className="study-show-page">
          <div className="nav-sidebar">

          </div>

          <StudySidebar curIdx={curIdx} />

          <div className="study-card">

            <div className="card-show">
              {
                flipped ? cards[curIdx].back : cards[curIdx].front
              }
            </div>

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
