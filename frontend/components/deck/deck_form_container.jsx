import DeckForm from './deck_form';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = ({ ui }) => {
  return {
    errors: ui.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createDeck: () => dispatch(createDeck())
  };
};

export default connect(null, mapDispatchToProps)(DeckForm);
