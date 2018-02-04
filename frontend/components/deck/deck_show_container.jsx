import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeck, removeDeck } from '../../actions/deck_actions';


const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;
  console.log("deckId: ", deckId);
  console.log("deck: ", state.entities.decks[deckId]);
  return {
    deckId: deckId,
    deck: state.entities.decks[deckId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    removeDeck: (id) => dispatch(removeDeck(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);
