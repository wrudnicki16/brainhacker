json.extract! deck, :id, :title, :creator_id
json.numCards @deck.cards.length
json.master_score @deck.mastery_score(current_user.id)
