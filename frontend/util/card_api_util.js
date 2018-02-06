export const fetchCards = () => {
  return {
    method: "GET",
    url: "/api/cards",
    error: err => console.log(err)
  };
};

export const fetchCard = (id) => {
  return {
    method: "GET",
    url: `/api/cards/${id}`,
    error: err => console.log(err)
  };
};

export const createCard = (card) => {
  return {
    method: "POST",
    url: `/api/cards`,
    data: card,
    error: err => console.log(err)
  };
};

export const deleteCard = (id) => {
  return {
    method: "DELETE",
    url: `/api/cards/${id}`,
    error: err => console.log(err)
  };
};

export const updateCard = (card) => {
  return {
    method: "PATCH",
    url: `/api/cards/${card.id}`,
    data: card,
    error: err => console.log(err)
  };
};
