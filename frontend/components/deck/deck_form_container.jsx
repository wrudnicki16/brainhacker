import DeckForm from './deck_form';
import { connect } from 'react-redux';
import { createDeck, clearErrors } from '../../actions/deck_actions';
import { createCard } from '../../actions/card_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.deck
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createDeck: (deck) => dispatch(createDeck(deck)),
    createCard: (card) => dispatch(createCard(card)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm);
