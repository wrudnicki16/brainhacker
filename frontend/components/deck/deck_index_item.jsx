import React from 'react';

class DeckIndexItem extends React.Component {
  render () {
    const { id, title } = this.props.deck;
    return (
      <div className="deck-select">
        <div className="deck-content">
          {title}
        </div>
        <div className="deck-divider"></div>
      </div>
    );
  }
}

export default DeckIndexItem;
