import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeck, deleteDeck } from '../../actions/deck_actions';
import { selectCards } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;
  return {
    deckId: deckId,
    decks: state.entities.decks,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    deleteDeck: (id) => dispatch(deleteDeck(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);
