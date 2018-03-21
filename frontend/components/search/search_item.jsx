import React from 'react';

const SearchItem = ({ searchedDeck }) => {
  return (
    <li>
      <div className="search-deck-info">
        <div className="search-deck-title">
          {searchedDeck['title']}
        </div>
        <div>
          Cards: {searchedDeck['numCards']}
        </div>
        <div>
          Creator: {searchedDeck['creator_id']}
        </div>
      </div>
    </li>
  );
};

export default SearchItem;
