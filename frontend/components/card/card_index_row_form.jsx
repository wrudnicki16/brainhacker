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

  handleUpdate(id, front) {
    this.props.updateCard({ card: { id, front }});
    setTimeout(() => {
      var x = document.getElementsByClassName("toast")[this.props.index];
      console.log("x", x);
      // Add the "show" class to DIV
      x.className = "toast show";
      setTimeout(function () { x.className = x.className.replace("toast show", "toast hidden"); }, 3000);
  
        // After 3 seconds, remove the show class from DIV
    }, 500);
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li className="toast hidden" key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.deckId !== nextProps.match.deckId) {
      this.props.clearErrors();
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
            this.handleUpdate(id, front);
          }}>
        </Textarea>
        <Textarea
          className="row-back"
          onChange={(e) => this.handleChange(e)}
          value={back}
          onBlur={() => {
            this.handleUpdate(id, back);
          }}>
        </Textarea>
        <button
          onClick= {() => this.props.deleteCard(id)}>
          <FontAwesome
            className="fas fa-minus-circle"
            name="minus-circle"
            size="2x"/>
        </button>
        {this.renderErrors()}
      </form>
    );
  }
}

export default CardIndexRowForm;
