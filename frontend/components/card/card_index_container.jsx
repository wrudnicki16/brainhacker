import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardIndex from './card_index';
import {
  fetchCards,
  fetchCard,
  deleteCard,
  updateCard,
  createCard
} from '../../actions/card_actions';
import { selectCards } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;
  debugger;
  return {
    deckId: deckId,
    cards: state.cards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchCard: id => dispatch(fetchCard(id)),
    deleteCard: id => dispatch(deleteCard(id)),
    updateCard: card => dispatch(updateCard(card)),
    createCard: card => dispatch(createCard(card))
  };
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CardIndex));
