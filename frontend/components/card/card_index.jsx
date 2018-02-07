import React from 'react';
import FontAwesome from 'react-fontawesome';
import CardIndexRowFormContainer from './card_index_row_form_container';

class CardIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCards(this.props.deckId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.deckId !== newProps.deckId) {
      this.props.fetchCards(newProps.deckId);
    }
  }

  render() {
    let blankCard = { card: { front: "", back: "", deckId: this.props.deckId} };
    let cards = this.props.cards.map((card, i) => {
      return <CardIndexRowFormContainer card={card} key={i} index={i}/>;
    });
    return (
      <div className="cards-index">
        <div className="cards-header">
          Cards:
          <a
            onClick={() => this.props.createCard(blankCard)}>
            <FontAwesome className="fas fa-plus-circle" name="plus-circle"/>
            &nbsp;Add Card
          </a>
        </div>
        <div className="cards-body">
          <div className="cards-body-header">

          </div>
          {cards}
        </div>
      </div>
    );
  }
}

export default CardIndex;
