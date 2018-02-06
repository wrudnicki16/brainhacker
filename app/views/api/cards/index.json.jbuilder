@cards.each do |card|
  json.set! card.id do
    json.extract! card, :id, :front, :back, :deck_id
  end
end
