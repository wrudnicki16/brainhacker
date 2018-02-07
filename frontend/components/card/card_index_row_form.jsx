import React from 'react';
import { merge } from 'lodash';
import FontAwesome from 'react-fontawesome';

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

  componentWillReceiveProps(newProps) {
    if (this.props.card.id !== newProps.card.id) {
      this.setState({ card: newProps.card });
    }
  }

  render() {
    console.warn("these are my props", this.props);
    const { id, front, back } = this.state.card;
    return (
      <form className={`row-${this.props.index + 1}`}>
        <span>{this.props.index + 1}</span>
        <textarea
          className="row-front"
          onChange={(e) => this.handleChange(e)}
          value={front}
          onBlur={() => {
            console.warn("blurred!");
            this.props.updateCard({ card: { id, front }});
          }}>
        </textarea>
        <textarea
          className="row-back"
          onChange={(e) => this.handleChange(e)}
          value={back}
          onBlur={() => {
            console.warn("blurred!");
            this.props.updateCard({ card: { id, back }});
          }}>
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
