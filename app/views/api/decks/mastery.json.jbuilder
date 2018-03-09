json.deck do
  json.mastery_score @deck.mastery_score(current_user.id)
  json.id @deck.id
end
