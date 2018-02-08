json.deck do
  json.extract! @deck, :id, :title, :creator_id
end

json.cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.extract! card, :id, :front, :back, :deck_id
    end
  end
end


# how do we get the latest confs here?

# json.confs do
#   @deck.cards.each do |card|
#     card.confs.each do |conf|
#
#     end
#   end
# end
