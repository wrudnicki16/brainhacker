import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import FontAwesome from 'react-fontawesome';

class StudySidebar extends React.Component {
  render() {
    const { deck, numCards, curIdx } = this.props;
    if (deck) {
      return (
        <div className="study-sidebar">
          <div className="study-title">
            <span>Studying: </span> {deck.title}
          </div>
          <div className="study-done"
               onClick={() => this.props.history.push(`/decks/${deck.id}`)}>
               <FontAwesome className="fas fa-chevron-left"
                            name="chevron-left"
                            size="2x"/> &nbsp; Done
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
