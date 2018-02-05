export const fetchDecks = () => {
  return $.ajax({
    method: "GET",
    url: "/api/decks",
    error: err => console.log(err)
  });
};

export const fetchDeck = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/decks/${id}`,
    error: err => console.log(err)
  });
};

export const createDeck = (deck) => {
  return $.ajax({
    method: "POST",
    url: `/api/decks`,
    data: deck,
    error: err => console.log(err)
  });
};

export const deleteDeck = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/decks/${id}`,
    error: err => console.log(err)
  });
};
