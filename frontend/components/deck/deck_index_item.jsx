import React from 'react';

class DeckIndexItem extends React.Component {
  render () {
    const { id, title } = this.props.deck;
    return (
      <li>{title}</li>
    );
  }
}

export default DeckIndexItem;
