import { connect } from 'react-redux';
import { createConf } from '../../actions/conf_actions';
import StudyShow from './study_show';
const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;
  return {
    deck: state.entities.decks[deckId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createConf: (conf) => dispatch(createConf(conf))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyShow);
