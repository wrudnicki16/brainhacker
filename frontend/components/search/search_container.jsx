import { connect } from 'react-redux';
import Search from './search';
import { searchDecks } from '../../actions/search_deck_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    decks: Object.values(state.entities.search_decks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchDecks: query => dispatch(searchDecks(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
