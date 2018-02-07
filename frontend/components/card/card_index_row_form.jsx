import React from 'react';
import { merge } from 'lodash';
import FontAwesome from 'react-fontawesome';

class CardIndexRowForm extends React.Component {
  handleChange(e) {
    const { id } = this.props.card;
    if (e.target.className === "row-front") {
      this.setState(merge({}, this.state, { card: { front: e.target.value}}));
      this.props.updateCard({card: { id: id, front: e.target.value }});
    } else {
      this.setState(merge({}, this.state, { card: { back: e.target.value}}));
      this.props.updateCard({card: { id: id, back: e.target.value }});
    }
  }

  render() {
    const { id, front, back } = this.props.card;
    return (
      <form className={`row-${this.props.index + 1}`}>
        <span>{this.props.index + 1}</span>
        <textarea
          className="row-front"
          onChange={(e) => this.handleChange(e)}
          value={front}>
        </textarea>
        <textarea
          className="row-back"
          onChange={(e) => this.handleChange(e)}
          value={back}>
        </textarea>
        <button
          onClick= {() => this.props.deleteCard(id)}>
          <FontAwesome
            className="fas fa-minus-circle"
            name="minus-circle"
            size="2x"/>
        </button>
      </form>
    );
  }
}

export default CardIndexRowForm;
