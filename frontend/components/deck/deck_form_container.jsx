import DeckForm from './deck_form';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';
import { createCard } from '../../actions/card_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.deck
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createDeck: (deck) => dispatch(createDeck(deck)),
    createCard: (card) => dispatch(createCard(card))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm);
