import DeckForm from './deck_form';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.deck
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createDeck: (deck) => dispatch(createDeck(deck))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm);
