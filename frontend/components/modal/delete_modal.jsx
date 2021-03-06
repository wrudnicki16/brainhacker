import React from 'react';
import Modal from 'react-modal';
import FontAwesome from 'react-fontawesome';

class DeleteModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  componentWillReceiveProps(newProps) {
    if (this.props.deckId !== newProps.deckId) {
      this.props.clearErrors();
    }
  }

  displayErrorToast() {
    let toast = document.getElementsByClassName("deck-toast")[0];
    if (toast) {
      toast.className = "deck-toast show";
      setTimeout(function () { toast.className = toast.className.replace("deck-toast show", "deck-toast hidden"); }, 3000);
    }
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li className="deck-toast hidden" key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // whats this doing?
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  deleteDeck() {
    const { deleteDeck, deckId } = this.props;
    this.closeModal();
    deleteDeck(deckId)
    .then(() => this.props.history.push("/decks"),
          err => this.displayErrorToast()); // maybe use a selector here to find the most recent last deck.
  }

  render() {
    return (
      <div className="deck-delete">
        <button onClick={this.openModal}
                className="deck-delete">
          <FontAwesome className="far fa-trash-alt" name="trash" size="5x"/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
          contentLabel="DeleteModal">
          <FontAwesome className="far fa-trash-alt" name="trash" size="3x"/>
          <h2>DELETE DECK</h2>
          <div className="modal-delimiter"></div>
          <p>Are you sure you want to delete this deck?
            All of its contents will be deleted as well!</p>
          <div className="modal-buttons">
            <button onClick={this.closeModal}>Cancel</button>
            <button onClick={this.deleteDeck}>Delete!</button>
          </div>
        </Modal>
        {this.renderErrors()}
      </div>
    );
  }
}

export default DeleteModal;
