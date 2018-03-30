import { connect } from 'react-redux';
import DeleteModal from './delete_modal';
import { deleteDeck, clearErrors } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    deckId: ownProps.match.params.deckId,
    errors: state.errors.deck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDeck: (id) => dispatch(deleteDeck(id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal));
