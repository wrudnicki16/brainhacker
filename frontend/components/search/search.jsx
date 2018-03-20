import React from 'react';

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
        <li key={i} onClick={() => this.studyDeck(result)}>{result['title']}</li>
      );
    });
    return(
      <div className='search-decks-page'>
        <h1>Search Decks</h1>
        <div className='auto'>
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
