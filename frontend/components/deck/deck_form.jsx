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

  handleSubmit(e) {
    e.preventDefault();
    const deck = merge({}, this.state);
    this.props.createDeck(deck);
    this.setState(() => {
      return { deck: { title: ""}};
    });
    // <Redirect to="decks/"
  }

  handleChange(e) {
    this.setState(merge({}, this.state, { deck: { title: e.target.value}}));
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <div className="deck-create-form">
        <ul>
          {this.errors()}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="submit" value="Create Deck"/>
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
