export const asArray = ({ decks }) => (
  Object.keys(decks).map(key => decks[key])
);
