import { connect } from 'react-redux';
import StudySidebar from './study_sidebar';

const mapStateToProps = (state, ownProps) => {
  const deckId = ownProps.match.params.deckId;
  const deck = state.entities.decks[deckId];
  debugger;
  return {
    numCards: Object.keys(state.entities.cards).length,
    deck,
    curIdx: ownProps.curIdx
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(
  mapStateToProps,
  null
)(StudySidebar);
