import React from 'react';
import FontAwesome from 'react-fontawesome';
import CardIndexRowForm from './card_index_row_form';
import { fetchCards } from '../../util/card_api_util';

class CardIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCards(this.props.deckId);
  }

  render() {
    console.log("CARD INDEX props:", this.props);
    console.log("CARD INDEX state:", this.state);
    let cards = this.state.cards.map((card, i) => (
      <CardIndexRowForm card={card} key={i}/>
    ));
    return (
      <div className="cards-index">
        <div className="cards-header">
          <h1>Cards:</h1>
          <button>Add Card</button>
        </div>
        <div className="cards-body">
          {cards}
        </div>
      </div>
    );
  }
}

export default CardIndex;
