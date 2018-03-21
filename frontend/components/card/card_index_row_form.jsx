import React from 'react';
import { merge } from 'lodash';
import FontAwesome from 'react-fontawesome';
import Textarea from 'react-textarea-autosize';

class CardIndexRowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: merge({}, this.props.card)
    };
  }

  handleChange(e) {
    if (e.target.className === "row-front") {
      this.setState(merge({}, this.state, { card: { front: e.target.value}}));
    } else {
      this.setState(merge({}, this.state, { card: { back: e.target.value}}));
    }
  }

  render() {
    const { id, front, back } = this.state.card;
    return (
      <form className={`row-${this.props.index + 1}`}>
        <span>{this.props.index + 1}</span>
        <Textarea
          className="row-front"
          onChange={(e) => this.handleChange(e)}
          value={front}
          onBlur={() => {
            this.props.updateCard({ card: { id, front }});
          }}>
        </Textarea>
        <Textarea
          className="row-back"
          onChange={(e) => this.handleChange(e)}
          value={back}
          onBlur={() => {
            this.props.updateCard({ card: { id, back }});
          }}>
        </Textarea>
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
