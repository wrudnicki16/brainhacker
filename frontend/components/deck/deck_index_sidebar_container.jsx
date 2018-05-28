import { connect } from 'react-redux';
import DeckIndexSidebar from './deck_index_sidebar';
import { fetchDecks } from '../../actions/deck_actions';
import { asArray } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let url = ownProps.location.pathname;
  let activeDeck = url.includes('/decks/') ? parseInt(url.slice(7)) : 0;
  return {
    decks: Object.values(state.entities.decks),
    activeDeck
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDecks: () => dispatch(fetchDecks())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndexSidebar));
