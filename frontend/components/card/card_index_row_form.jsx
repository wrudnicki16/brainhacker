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

  handleUpdate(id, value, side) {
    this.props.updateCard({ card: { id, [side]: value }})
    .then(action => {
      this.displaySaveToast();
    }, err => this.displayErrorToast());
  }

  handleDelete(id) {
    this.props.deleteCard(id)
    .then(action => {
      return
    }, err => this.displayErrorToast());
  }

  displaySaveToast() {
    let toast = document.getElementById("saved-toast");
    if (toast) {
      toast.className = "show";
      setTimeout(function () { toast.className = toast.className.replace("show", "hidden"); }, 3000);
    }
  }

  displayErrorToast() {
    let toast = document.getElementsByClassName("toast")[this.props.index];
    if (toast) {
      toast.className = "toast show";
      setTimeout(function () { toast.className = toast.className.replace("toast show", "toast hidden"); }, 3000);
    }
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
            this.handleUpdate(id, front, "front");
          }}>
        </Textarea>
        <Textarea
          className="row-back"
          onChange={(e) => this.handleChange(e)}
          value={back}
          onBlur={() => {
            this.handleUpdate(id, back, "back");
          }}>
        </Textarea>
        <button
          onClick= {() => this.handleDelete(id)}>
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
