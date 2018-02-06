import React from 'react';

class CardIndexRowForm extends React.Component {
  render() {
    const { front, back } = this.props.card;
    return (
      <div className="row">
        {this.props.key}
        {front}
        {back}
      </div>
    );
  }
}
