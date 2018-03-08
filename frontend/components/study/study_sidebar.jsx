import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class StudySidebar extends React.Component {
  render() {
    const { deck, numCards, curIdx } = this.props;
    if (deck) {
      return (
        <div className="study-sidebar">
          <div className="study-title">
            <span>Studying: </span> {deck.title}
          </div>
          <div className="study-progress">
            <CircularProgressbar
              percentage={deck.mastery_score}
              initialAnimation
              />
          </div>
          {`${curIdx + 1} / ${deck.numCards} cards`}
        </div>
      );
    } else {
      return (
        <div className="study-sidebar"></div>
      );
    }
  }
}

export default StudySidebar;
