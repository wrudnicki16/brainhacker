@decks.each do |deck|
  json.set! deck.id do
    json.extract! deck, :id, :title, :creator_id
    json.numCards deck.cards.length
    json.mastery_score deck.mastery_score(current_user.id)
  end
end

# make a partial so you can get mastery score and num cards in here too.

# json.partial! 'api/decks/deck', deck: deck
