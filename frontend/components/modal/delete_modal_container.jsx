import { connect } from 'react-redux';
import DeleteModal from './delete_modal';
import { deleteDeck } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    deckId: ownProps.match.params.deckId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDeck: (id) => dispatch(deleteDeck(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal));
