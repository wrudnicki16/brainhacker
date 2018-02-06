export const asArray = ({ decks }) => (
  Object.keys(decks).map(key => decks[key])
);

export const selectCards = ({ cards }, deckId) => {
  let selected = [];
  Object.values(cards).forEach((card) => {
    if (card.deckId === deckId) {
      selected.push(card);
    }
  });
  return selected;
};
