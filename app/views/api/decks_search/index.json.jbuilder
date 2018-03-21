json.array!(@decks) do |deck|
  json.id deck.id
  json.title deck.title
  json.creator_id deck.creator_id
  json.numCards deck.cards.length
  json.name = deck.findCreatorName(deck.creator_id)
end
