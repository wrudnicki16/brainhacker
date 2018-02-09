@decks.each do |deck|
  json.set! deck.id do
    json.extract! deck, :id, :title, :creator_id
  end
end

# make a partial so you can get mastery score and num cards in here too.

# json.partial! 'api/decks/deck', deck: deck
