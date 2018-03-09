import { connect } from 'react-redux';
import StudySidebar from './study_sidebar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const deckId = ownProps.match.params.deckId;
  const deck = state.entities.decks[deckId];
  return {
    numCards: Object.keys(state.entities.cards).length,
    deck,
    curIdx: ownProps.curIdx
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default withRouter(connect(
  mapStateToProps,
  null
)(StudySidebar));
