import { connect } from 'react-redux';
import { createConf } from '../../actions/conf_actions';
import StudyShow from './study_show';
import { fetchDeck, getMastery } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;
  let deck = state.entities.decks[deckId];
  let cards = Object.values(state.entities.cards);
  let confs = state.entities.confs;
  return {
    deckId,
    deck,
    cards,
    confs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createConf: (conf) => dispatch(createConf(conf)),
    fetchDeck: (id) => dispatch(fetchDeck(id)),
    getMastery: (id) => dispatch(getMastery(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyShow);
