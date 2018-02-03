import { connect } from 'react-redux';
import DeckIndexSidebar from './deck_index_sidebar';
import { fetchDecks } from '../../actions/deck_actions';
import { asArray } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  console.log("state!!!", state);
  console.log("props!", ownProps);
  return {
    decks: asArray(state.entities)
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
