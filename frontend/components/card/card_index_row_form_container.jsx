import { connect } from 'react-redux';
import {
  fetchCard,
  deleteCard,
  updateCard,
} from '../../actions/card_actions';
import CardIndexRowForm from './card_index_row_form';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card,
    index: ownProps.index
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCard: id => dispatch(fetchCard(id)),
    deleteCard: id => dispatch(deleteCard(id)),
    updateCard: card => dispatch(updateCard(card))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CardIndexRowForm);
