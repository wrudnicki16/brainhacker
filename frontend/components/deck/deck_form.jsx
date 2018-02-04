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

  // navigageToDeckShow() {
  //   this.props.history.push()
  // }

  handleSubmit(e) {
    e.preventDefault();
    const deck = merge({}, this.state);
    const newDeck = this.props.createDeck(deck);
    console.log("this is the new deck", newDeck);
    console.log("these are state", this.state);
    console.log("this is props");
    // this.navigageToDeckShow(newDeck);
    this.setState(() => {
      return { deck: { title: ""}};
    });
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
