json.deck do
  json.partial! 'api/decks/deck', deck: deck
end

json.cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.extract! card, :id, :front, :back, :deck_id
    end
  end
end

json.numCards @deck.cards.length

# how do we get the latest confs here?
# do we need confs or mastery score?

json.master_score @deck.mastery_score(current_user.id)
# json.confs do
#   @deck.cards.each do |card|
#     card.confs.each do |conf|
#
#     end
#   end
# end
