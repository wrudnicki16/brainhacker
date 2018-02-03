import React from 'react';

class DeckIndexItem extends React.Component {
  render () {
    return (
      <li key={this.props.key}>{this.props.deck.title}</li>
    );
  }
}

export default DeckIndexItem;
