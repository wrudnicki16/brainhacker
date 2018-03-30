import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchCard,
  deleteCard,
  updateCard,
} from '../../actions/card_actions';
import CardIndexRowForm from './card_index_row_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.card
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCard: id => dispatch(fetchCard(id)),
    deleteCard: id => dispatch(deleteCard(id)),
    updateCard: card => dispatch(updateCard(card)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CardIndexRowForm));
