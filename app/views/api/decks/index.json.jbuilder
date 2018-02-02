@decks.each do |deck|
  json.set! deck.id do
    json.extract! deck, :title, :creator_id
  end
end
