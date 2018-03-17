export const searchDecks = (query) => {
  return $.ajax({
    method: "GET",
    url: "/api/decks_search",
    data: {
      search: {
        query
      }
    },
    error: err => console.log(err)
  });
};
