import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardIndex from './card_index';
import {
  fetchCards,
  createCard
} from '../../actions/card_actions';
import { selectCards } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;
  return {
    deckId: deckId,
    cards: Object.values(state.entities.cards)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    createCard: card => dispatch(createCard(card))
  };
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CardIndex));
