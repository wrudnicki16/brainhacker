export const fetchCards = (deckId) => {
  return $.ajax({
    method: "GET",
    url: `/api/decks/${deckId}/cards`,
    error: err => console.log(err)
  });
};

export const fetchCard = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/cards/${id}`,
    error: err => console.log(err)
  });
};

export const createCard = (payload) => {
  return $.ajax({
    method: "POST",
    url: `/api/decks/${payload.card.deck_id}/cards`,
    data: payload,
    error: err => console.log(err)
  });
};

export const deleteCard = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cards/${id}`,
    error: err => console.log(err)
  });
};

export const updateCard = (payload) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/cards/${payload.card.id}`,
    data: payload,
    error: err => console.log(err)
  });
};
