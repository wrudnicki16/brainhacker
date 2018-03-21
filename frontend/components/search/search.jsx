import React from 'react';
import SearchItem from './search_item';
import FontAwesome from 'react-fontawesome';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value}, this.updateSearch);
  }

  updateSearch() {
    this.props.searchDecks(this.state.inputVal);
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }

    this.props.decks.forEach(deck => {
      let sub = deck.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(deck);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  studyDeck(deck) {
    this.props.history.push(`study/${deck.id}`);
  }

  render() {
    let results = this.props.decks.map((result, i) => {
      return (
        <div className='search-deck-item'>
          <SearchItem key={i} searchedDeck={result} />
          <button onClick={() => this.studyDeck(result)}>
            Study &nbsp;
            <FontAwesome className="fas fa-chevron-right"
                         name="chevron-right"
                         size="2x"/>
          </button>
        </div>
      );
    });
    return(
      <div className='search-decks-page'>
        <div className='auto'>
          <h1>Search Decks</h1>
          <input
            onChange={(e) => this.handleInput(e)}
            value={this.state.inputVal}
            placeholder='Search decks...'/>
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
