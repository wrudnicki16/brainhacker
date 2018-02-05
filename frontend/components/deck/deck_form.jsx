import React from 'react';
import { merge } from 'lodash';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        title: "",
      }
    };
  }

  navigageToDeckShow(id) {
    this.props.history.push(`/decks/${id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const deck = merge({}, this.state);
    // deck1 is in the first promise because we receive a promise from ajax on the backend with a deck as the data.
    // action is in the second promise because we just dispatched an action with a payload to be sent to the reducer.
    // this last "then" takes that action and redirects us to the appropriate page.

    this.props.createDeck(deck)
    .then((action) => this.navigageToDeckShow(action.payload.deck.id));

    this.setState(() => {
      return { deck: { title: ""}};
    });
  }

  handleChange(e) {
    this.setState(merge({}, this.state, { deck: { title: e.target.value}}));
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {
            this.props.errors.map((error, i) => (
              <li className="errors" key={`error-${i}`}>
                {error}
              </li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="deck-create-form">
        <ul>
          {this.renderErrors()}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="submit" value="Done"/>
          <input type="text"
            placeholder="Title your deck"
            onChange={(e) => this.handleChange(e)}
            value={this.state.deck.title}/>
        </form>
      </div>
    );
  }
}

export default DeckForm;
