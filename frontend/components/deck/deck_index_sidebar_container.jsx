import { connect } from 'react-redux';
import DeckIndexSidebar from './deck_index_sidebar';
import { fetchDecks } from '../../actions/deck_actions';
import { asArray } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    decks: Object.values(state.entities.decks)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDecks: () => dispatch(fetchDecks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndexSidebar);
